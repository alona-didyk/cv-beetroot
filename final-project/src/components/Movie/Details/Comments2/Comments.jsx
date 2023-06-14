import React, { useState, useEffect } from "react";
import "./styles/Comments.scss";
import { Comment } from "./Comment";
import { AddComment } from "./AddComment";

export const Comments = () => {
  const [comments, updateComments] = useState([
    {
      id: 1,
      content: "I absolutely loved this movie! The storyline was captivating, and the performances were brilliant. Highly recommend it!",
      createdAt: "23 November 2021",
      score: 12,
      username: "amyrobson",
      currentUser: false,
      replies: []
    },
    {
      id: 2,
      content: "I agree! The cinematography was stunning, and the soundtrack added so much depth to the film. It's definitely a must-watch!",
      createdAt: "5 December 2021",
      score: 5,
      username: "maxblagun",
      currentUser: false,
      replies: [
        {
          id: 3,
          content: "@maxblaugn, This movie was a huge disappointment. The plot was confusing, and the acting felt forced. I wouldn't recommend it.",
          createdAt: "18 December 2021",
          score: 4,
          username: "ramsesmiron",
          currentUser: false,
          replies: []
        },
        {
          id: 4,
          content: "@ramsesmiron, I have to disagree. I thought the movie was a unique and thought-provoking experience. It's not for everyone, but I found it quite intriguing.",
          createdAt: "30 December 2021",
          score: 2,
          username: "juliusomo",
          currentUser: true,
          replies: []
        }
      ]
    },
  ]);
  const [deleteModalState, setDeleteModalState] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("comments")) {
      updateComments(JSON.parse(localStorage.getItem("comments")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
    deleteModalState
      ? document.body.classList.add("overflow--hidden")
      : document.body.classList.remove("overflow--hidden");
  }, [comments, deleteModalState]);

  // update score
  let updateScore = (score, id, type) => {
    let updatedComments = [...comments];

    if (type === "comment") {
      updatedComments.forEach((data) => {
        if (data.id === id) {
          data.score = score;
        }
      });
    } else if (type === "reply") {
      updatedComments.forEach((comment) => {
        comment.replies.forEach((data) => {
          if (data.id === id) {
            data.score = score;
          }
        });
      });
    }
    updateComments(updatedComments);
  };

  // add comments
  let addComments = (newComment) => {
    let updatedComments = [...comments, newComment];
    updateComments(updatedComments);
  };

  // add replies
  let updateReplies = (replies, id) => {
    let updatedComments = [...comments];
    updatedComments.forEach((data) => {
      if (data.id === id) {
        data.replies = [...replies];
      }
    });
    updateComments(updatedComments);
  };

  // edit comment
  let editComment = (content, id, type) => {
    let updatedComments = [...comments];

    if (type === "comment") {
      updatedComments.forEach((data) => {
        if (data.id === id) {
          data.content = content;
        }
      });
    } else if (type === "reply") {
      updatedComments.forEach((comment) => {
        comment.replies.forEach((data) => {
          if (data.id === id) {
            data.content = content;
          }
        });
      });
    }

    updateComments(updatedComments);
  };

  // delete comment
  let commentDelete = (id, type, parentComment) => {
    let updatedComments = [...comments];
    let updatedReplies = [];

    if (type === "comment") {
      updatedComments = updatedComments.filter((data) => data.id !== id);
    } else if (type === "reply") {
      comments.forEach((comment) => {
        if (comment.id === parentComment) {
          updatedReplies = comment.replies.filter((data) => data.id !== id);
          comment.replies = updatedReplies;
        }
      });
    }

    updateComments(updatedComments);
  };

  return (
    <main className="Comments">
    <h2 className="Comments__title">Comments</h2>
    {comments.map((comment) => (
      <Comment
        key={comment.id}
        commentData={comment}
        updateScore={updateScore}
        updateReplies={updateReplies}
        editComment={editComment}
        commentDelete={commentDelete}
        setDeleteModalState={setDeleteModalState}
      />
    ))}
    <AddComment buttonValue={"send"} addComments={addComments} />
  </main>
  );
};



