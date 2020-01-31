import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  ListView,
  FlatList,
  SafeAreaView
} from "react-native";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";

const Shimmer = props => {
  const [posts, setPosts] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const fecthPosts = async () => {
    setIsFetched(false);
    setTimeout(async () => {
      const data = await fetch("http://jsonplaceholder.typicode.com/posts");
      const jsonData = await data.json();
      setPosts(jsonData);
      setIsFetched(true);
    }, 2000);
  };

  useEffect(() => {
    setIsFetched(false);
    setTimeout(() => {
      setIsFetched(true);
    }, 2000);
    // fecthPosts();
  }, []);
  return (
    <SafeAreaView>
      <Text>{JSON.stringify(isFetched)}</Text>
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: "grey",
          marginBottom: 10
        }}
      >
        <ShimmerPlaceHolder
          autoRun
          visible={isFetched}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        >
          <Image
            source={{ uri: "https://i.picsum.photos/id/250/100/100.jpg" }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        </ShimmerPlaceHolder>
      </View>
      <View
        style={{
          backgroundColor: "#7f7f7f",
          width: "100%",
          height: 200,
          marginBottom: 10
        }}
      >
        <ShimmerPlaceHolder
          autoRun
          visible={isFetched}
          style={{
            width: "100%",
            height: 200,
            marginBottom: 10
          }}
        >
          <Text>Image</Text>
        </ShimmerPlaceHolder>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: 90,
            backgroundColor: "crimson"
          }}
        >
          <ShimmerPlaceHolder
            autoRun
            visible={isFetched}
            style={{ width: "100%", height: 90 }}
          >
            <Text>Left</Text>
          </ShimmerPlaceHolder>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: 90,
            backgroundColor: "lime"
          }}
        >
          <ShimmerPlaceHolder
            autoRun
            visible={isFetched}
            style={{ width: "100%", height: 90 }}
          >
            <Text>Left</Text>
          </ShimmerPlaceHolder>
        </View>
      </View>
      {/* Three flexbox in row */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            padding: 10
          }}
        >
          <ShimmerPlaceHolder
            autoRun
            visible={isFetched}
            style={{
              width: "100%",
              height: 30,
              marginBottom: 5
            }}
          >
            <Text
              style={{
                width: "100%",
                height: 30,
                marginBottom: 5
              }}
            >
              1
            </Text>
          </ShimmerPlaceHolder>
          <ShimmerPlaceHolder
            autoRun
            visible={isFetched}
            style={{
              width: "100%",
              height: 30,
              marginBottom: 5
            }}
          >
            <Text
              style={{
                width: "100%",
                height: 30,
                marginBottom: 5
              }}
            >
              1
            </Text>
          </ShimmerPlaceHolder>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            padding: 10
          }}
        >
          <ShimmerPlaceHolder
            autoRun
            visible={isFetched}
            style={{
              width: "100%",
              height: 30,
              marginBottom: 5
            }}
          >
            <Text
              style={{
                width: "100%",
                height: 30,
                marginBottom: 5
              }}
            >
              2
            </Text>
          </ShimmerPlaceHolder>
          <ShimmerPlaceHolder
            autoRun
            visible={isFetched}
            style={{
              width: "100%",
              height: 30,
              marginBottom: 5
            }}
          >
            <Text
              style={{
                width: "100%",
                height: 30,
                marginBottom: 5
              }}
            >
              2
            </Text>
          </ShimmerPlaceHolder>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            padding: 10
          }}
        >
          <ShimmerPlaceHolder
            autoRun
            visible={isFetched}
            style={{
              width: "100%",
              height: 30,
              marginBottom: 5
            }}
          >
            <Text
              style={{
                width: "100%",
                height: 30,
                marginBottom: 5
              }}
            >
              3
            </Text>
          </ShimmerPlaceHolder>
          <ShimmerPlaceHolder
            autoRun
            visible={isFetched}
            style={{
              width: "100%",
              height: 30
            }}
          >
            <Text
              style={{
                width: "100%",
                height: 30
              }}
            >
              3
            </Text>
          </ShimmerPlaceHolder>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Shimmer;
const styles = StyleSheet.create({});

{
  /* <ShimmerPlaceHolder
autoRun
visible={isFetched}
style={{width: '100%', height: 300}}> */
}
{
  /* <Text>{JSON.stringify(posts)}</Text> */
}
{
  /* <FlatList
  data={posts}
  keyExtractor={item => item.index}
  renderItem={rowData => <Text>{rowData.item.body}</Text>}
/>
</ShimmerPlaceHolder> */
}
