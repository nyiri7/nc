import { StyleSheet, Text, View } from 'react-native'
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
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <View style={customStyle.screen}>
      <View style={customStyle.header}>
        <Text style={customStyle.headerText}>Select users to create a party!</Text>
      </View>
      
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}

      {data && Array.isArray(data) && data.map((user, idx) => (
        <View key={user.id || idx} style={customStyle.listItem}>
          <Text>{user.name ? user.name : JSON.stringify(user)}</Text>
        </View>
      ))}

    </View>
  );
}

export default party

const styles = StyleSheet.create({

})