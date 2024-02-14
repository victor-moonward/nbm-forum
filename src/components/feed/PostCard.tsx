import { Colors } from "@/styles/theme";
import { Posts, StackNavigation } from "@/types";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  Text as TextNative
} from "react-native";
import { Link, Text, Title } from "../common";
import { formatDate } from "@/utils/formatDate";
import { SingleTag } from ".";
import { Comment } from "@/assets/icons/Comment";
import { useNavigation } from "@react-navigation/native";

interface PostCardProps extends Posts { }

interface HeaderProps {
  userName: string;
  createdAt: string;
}

interface HeadingProps {
  title: string;
  tags: Posts['tags']
}

interface ContentProps {
  description: string;
  commentsNumber: number;
}

export function HeaderDescription({ userName, createdAt }) {
  return (
    <View style={headerStyles.authorContainer}>
      <Text>{userName}</Text>
      <View style={headerStyles.splitter} />
      <Text>{formatDate(createdAt)}</Text>
    </View>
  )
}

function Header({ userName, createdAt }: HeaderProps) {
  return (
    <View style={headerStyles.container}>
      <HeaderDescription
        userName={userName}
        createdAt={createdAt}
      />
      <Link
        onPress={() => console.log("pressed")}
        style={headerStyles.editButton}
      >
        Edit
      </Link>
    </View>
  )
}

function Heading({ title, tags }: HeadingProps) {
  return (
    <View style={headingStyles.container}>
      <Title numberOfLines={2}>
        {title}
      </Title>
      <ScrollView contentContainerStyle={headingStyles.tagsContainer}>
        {tags.map(item => (
          <SingleTag
            key={item.name}
            active
          >
            {item.name}
          </SingleTag>
        ))}
      </ScrollView>
    </View>
  )
}

function Content({ description, commentsNumber }: ContentProps) {
  return (
    <View style={contentStyles.container}>
      <Text>{description}</Text>
      <Pressable
        onPress={() => console.log("")}
        style={contentStyles.commentContainer}
      >
        <Comment color={Colors.inputIcon} />
        <TextNative style={contentStyles.commentText}>
          {commentsNumber}
        </TextNative>
      </Pressable>
    </View>
  )
}

export function PostCard({
  user,
  createdAt,
  title,
  tags,
  content,
  comments,
  id
}: PostCardProps) {
  const userName = user.firstName + user.lastName;
  const { navigate } = useNavigation<StackNavigation>();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigate("SinglePost", { id })}
    >
      <Header
        userName={userName}
        createdAt={createdAt}
      />
      <Heading
        title={title}
        tags={tags}
      />
      <Content
        description={content}
        commentsNumber={comments}
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 5,
    borderBottomColor: Colors.borderCard,
  },
  header: {
    borderWidth: 1,
    flexDirection: "row"
  },
});

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  splitter: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.primary
  },
  editButton: {
    textDecorationLine: "underline",
    textAlign: "right"
  },
});

const headingStyles = StyleSheet.create({
  container: {
    paddingTop: 10,
    gap: 10
  },
  tagsContainer: {
    flexGrow: 1,
    flexDirection: "row",
    gap: 10,
  }
});

const contentStyles = StyleSheet.create({
  container: {
    gap: 10,
    paddingTop: 10,
  },
  commentContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  commentText: {
    color: Colors.notificationText
  }
});