import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native'
import { useEffect, useState } from 'react'
import { customStyle } from './style'

const party = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch('https://nc-backend-tlhj.onrender.com/users')
      .then((response) => response.json())
      .then((json) => {
        const usersWithCustom = Array.isArray(json) ? json.map(user => ({ ...user, selected: false })) : json;
        setData(usersWithCustom);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const postParty = async () => {
    if (!data) return;
    const selectedUsers = data.filter(u => u.selected);
    try {
      const response = await fetch('https://nc-backend-tlhj.onrender.com/parties', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ users: selectedUsers })
      });
      if (!response.ok) throw new Error('Failed to create party');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View>
      <View style={customStyle.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
          <View width="80%">
            <Text style={customStyle.headerText}>Select users to create a party!</Text>
          </View>
          <View>
            <Pressable onPress={postParty}>
              <View
                style={[
                  { borderRadius: 15, width: 30, height: 30, alignItems: "center", justifyContent: "center" },
                  (data && Array.isArray(data) && data.some(u => u.selected))
                    ? { backgroundColor: 'white' }
                    : { backgroundColor: 'lightgray' }
                ]}
              >
                <Text style={{ color: "blue", fontWeight: "bold" }}>+</Text>
              </View>
            </Pressable>
          </View>
          
        </View>
      </View>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}
      <ScrollView style={{ marginBottom:100  }}>
        {data && Array.isArray(data) && data.map((user, idx) => (
          <Pressable
            key={user.id || idx}
            onPress={() => {
              setData(prev =>
                prev.map((u, i) => {
                  if (i === idx) {
                    return { ...u, selected: !u.selected };
                  }
                  return u;
                })
              );
            }}
            style={[
              customStyle.listItem,
              user.selected && { backgroundColor: '#cce5ff' }
            ]}
          >
            <Image source={{ uri: "https://images.theconversation.com/files/337593/original/file-20200526-106811-ql6d51.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop" }} style={{ width: 50, height: 50 }} />
            <Text>{user.name ? user.name : JSON.stringify(user)}</Text>
          </Pressable>
        ))}
      </ScrollView>


    </View>
  );
}

export default party

const styles = StyleSheet.create({

})