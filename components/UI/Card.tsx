import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import styles from "../../styles/style";

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

type Props = {
  user: User;
};

export default function Card({ user }: Props) {
  const [isFollowed, setIsFollowed] = useState<boolean>(false);
  return (
    <View style={styles.card}>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              padding: 5,
              borderWidth: 0.5,
              borderColor: "#ccc",
              borderRadius: 9999,
            }}
          >
            <Image
              style={{ borderRadius: 9999, overflow: "hidden" }}
              source={{
                width: 50,
                height: 50,
                uri: user.picture.medium,
              }}
            />
          </View>

          <View style={{ display: "flex", flexDirection: "column" }}>
            <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
              {user.name.first + " " + user.name.last}
            </Text>
            <Text style={{ fontSize: 12, color: "#ccd" }}>
              @{user.login.username}
            </Text>
          </View>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              setIsFollowed((prev) => !prev);
            }}
            style={{
              backgroundColor: isFollowed ? "#3A86FF" : "white",
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 50,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "700",
                color: isFollowed ? "white" : "black",
              }}
            >
              {" "}
              {isFollowed ? "Unfollow" : "Follow"}{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ width: "100%" }}>
        <Text style={{ color: "#ddd", fontSize: 14, fontWeight: "800" }}>
          {user.email}
        </Text>
      </View>

      <View
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 20,
          flexDirection: "row",
        }}
      >
        <Text style={{ fontWeight: "800", color: "gray" }}>27k followers</Text>
        <Text style={{ fontWeight: "800", color: "gray" }}>30k followings</Text>
      </View>
    </View>
  );
}
