import Feed from "@/components/Feed";
import Header from "@/components/Header";
import Login from "@/components/Login";
import Sidebar from "@/components/Sidebar";
import Widgets from "@/components/Widgets";
import { getSession } from "next-auth/react";
import Head from "next/head";

import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";

export default function Home({ session, posts }) {
  if (!session) {
    return <Login />;
  }

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook 2.0</title>
      </Head>

      {/* Header */}
      <Header session={session} />

      <main className="flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed posts={posts} />
        {/* Widgets */}
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const postsRef = query(collection(db, "posts"), orderBy("timestamp", "desc"));
  const postsSnapshot = await getDocs(postsRef);

  const docs = postsSnapshot?.docs?.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: {
      session,
      posts: docs,
    },
  };
}
