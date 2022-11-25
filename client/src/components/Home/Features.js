import { Grid } from '@mui/material'
import React from 'react'

const Features = () => {
  return (
    <div className='background' sx={{mt:0}}>
      <h1 className='features-heading'>FEATURES</h1>
      <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      >
        <Grid item sm={5} className='features-background-image'>
          
        </Grid>
        <Grid item sm={7} sx={{p:3}}>
          <ul>
            <li>
              <span className='features-feature'>Profile</span>
              <p className='features-feature-content'>
                Each student has their own profile storing personal information. Each student can be
                searched by other student and can see his profile. This platform will ease the finding details
                of any student and reaching out to him/her. Profile will be used to filter based on branches,
                skill set, internship or placement etc
              </p>
            </li>

            <li>
              <span className='features-feature'>Blogs</span>
              <p className='features-feature-content'>
              Blogs are the best source of information and will be for our college students too. Blogs will
              share information helpful for every student some way or other. There will be various
              categories of blogs:
               College Resources
               College Culture
               Roadmaps
               Technology
               Finance
               Success stories
               Entrepreneurship
               Student Hacks
               Interview Experience
              </p>
            </li>

            <li>
              <span className='features-feature'>Notice Board</span>
              <p className='features-feature-content'>
              Notice Board will help broadcasting important notice either official or notice by any
              club/committee can be broadcasted easily to every student.
              </p>
            </li>

            <li>
              <span className='features-feature'>Query Section</span>
              <p className='features-feature-content'>
              Every student has query or doubt at any instant and sometimes its too urgent to be
              resolved and due to limiting size of friend circle, its impossible to be solved urgently, hence
              having such section where one can put their queries where thousands can see it will have
              more chances to be resolved faster. Notifications will notify each user about the query
              being raised.
              </p>
            </li>

            <li>
              <span className='features-feature'>Page</span>
              <p className='features-feature-content'>
              This is the important feature, you can relate ‘Page’ just like Facebook page, where different
              club/committee have created their pages but due to lot of posts from other sources to
              sometimes important post can be missed and have its own disadvantages. Hence having
              such Page with this platform avoid such distractions and ease the communicating the
              information to all the member(followers) of this page. Page will have feature to follow it
              and allow only admins to post posts on it. Such pages can be created by any student.
              </p>
            </li>

            <li>
              <span className='features-feature'>Sell & Buy Page</span>
              <p className='features-feature-content'>
              Most required feature for every final year college grads, where they can sell their stuff to
              juniors. This page will allow student to upload images with its name, cost and contact
              number, which will ease the selling process. So buyer can reach out to seller using given
              contact number.
              </p>
            </li>

            <li>
              <span className='features-feature'>Messaging</span>
              <p className='features-feature-content'>
              This feature will allow two users to communicate with each other, helpful for personal
              chats when needed which will be completely private. One can block student to messaging
              them if they don’t find it comfortable. Notifications will notify students about new
              messages.
              </p>
            </li>


          </ul>
        </Grid>
      </Grid>
    </div>
  )
}

export default Features