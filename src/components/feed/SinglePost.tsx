import { Colors } from "@/styles/theme";
import { Posts } from "@/types";
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

interface SinglePostProps extends Posts { }

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

function Header({ userName, createdAt }: HeaderProps) {
  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.authorContainer}>
        <Text>{userName}</Text>
        <View style={headerStyles.splitter} />
        <Text>{formatDate(createdAt)}</Text>
      </View>
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

export function SinglePost({
  user,
  createdAt,
  title,
  tags,
  content,
  comments
}: SinglePostProps) {
  const userName = user.firstName + user.lastName;

  return (
    <View style={styles.container}>
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
    </View>
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
    flexDirection: "row"
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