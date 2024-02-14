import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView } from "react-native";
import styles from "./styles/style";
import Card from "./components/UI/Card";
import { useEffect, useState } from "react";

type User = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
};

export default function App() {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async ()=> {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const data = await response.json();
    setUsers(data.results);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={{ flex: 1, paddingVertical: 10, backgroundColor: "#1a1a1a" }}>
      <ScrollView style={styles.container}>
        {
          users.map((user, index) => (
            <Card key={index} user={user} />
          ))
        }
      </ScrollView>
    </View>
  );
}
