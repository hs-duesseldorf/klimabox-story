import React, { useEffect, useState } from "react";
import { addTopic, favoritPosts, getTopics, removeTopic, getTickets, createTicket } from "../../users_api/UserAPI";
import { FavoritePosts } from "./favorite-posts";
import { LatestBlogPost } from "./latest-blog-post";
import { Profile } from "./profile";
import { Ticket, TicketInterface } from "./tickets";
import { Topics } from "./topics";

export default interface TopicInterface {
  id: string,
  name: string,
  description: string,
  liked: boolean
}

export const UserDashboard: React.FC = () => {
  const [favoritposts, setFavoritPosts] = useState([]);
  const [topics, setTopics] = useState<TopicInterface[]>([]);
  const [tickets, setTickets] = useState<TicketInterface[]>([]);

  const fetchFavorits = async () => {
    let response;
    try {
      response = await favoritPosts()
    } catch(error) {
      setFavoritPosts([])
    }
    if (response) {
      // @ts-ignore
      let slugs = response.slugs
      setFavoritPosts(JSON.parse(JSON.stringify(slugs)))
    }
  }

  const fetchTopics = async () => {
    let response;
    try {
      response = await getTopics()
    } catch(error) {
      setTopics([])
    }
    let responseTopics: Array<TopicInterface> = []
    if (response) {
      // @ts-ignore
      response.forEach(element => {
        responseTopics.push(element)
      });
      setTopics(responseTopics)
    }
  }


  const fetchTickets = async () => {
    let response;
    try {
      response = await getTickets()
    } catch(error) {
      setTickets([]);
    }
    let responseTickets: Array<TicketInterface> = []
    if (response) {
      // @ts-ignore
      response.forEach(element => {
        responseTickets.push(element)
      });
      setTickets(responseTickets)
    }
  }

  useEffect(() => {
    fetchFavorits();
    fetchTopics();
    fetchTickets();
  }, []);

  const handleTopicClick = async (topic: TopicInterface) => {
    if (topic.liked) {
      try {
        await removeTopic(topic)
      } catch(error) {
        console.log(error)
      }
      fetchTopics()
    } else {
      try {
        await addTopic(topic)
      } catch(error) {
        console.log(error)
      }
      fetchTopics()
    }
  }

  const handleSendTicket = async (message: string) => {
    let data = {
      message: message
    }
    try {
      await createTicket(data)
    } catch(error) {
      console.log(error)
    }
    fetchTickets();
  }


  return (
    <div>
      <div className="center-box mt-40">
        <h1 className="text-3xl mb-10 border-b-2">
            Mein Bereich
        </h1>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-x-10 xl:gap-16 mb-6">
          <div>
            <Profile />
            <Ticket tickets={tickets} handleSend={handleSendTicket}/>
          </div>
          <div>
            <LatestBlogPost posts={favoritposts}/>
            <Topics topics={topics} handleClick={handleTopicClick}/>
          </div>
        </div>
        <FavoritePosts posts={favoritposts}/>
        </div>
    </div>
  );
};
