---
layout: post
title: "ClapprBoard Release"
date: 2016-05-03
---

### [ClapprBoard](http://clapprboard.tiagomartins.xyz)

![Screenshot](/assets/postimages/clapprboard-login.jpg)

In lieu of the job interview I had, they seemed very interested in me, however, the fact that I'm self taught kind of made them hesitant to invest in me. That is completely understandable, for without any real world experience or even academic training, how can they know I can perform?
Well, they launched a simple challenge at me. Create something in two weeks, using the technologies they use everyday. StrongLoop's Loopback, Angular, Gulp, Bootstrap, SASS and a few others made the list, emphasis was also put on responsive web design, REST APIs, best practices of both Javascript and SASS among others. In that note, I set out on creating something that could showcase all of those technologies. I came up with an idea of a TV Show tracking application, it would integrate with a public API to get all the data it needed and it would manage it and cache it to build up the database.

<!--break-->

The deadline still hasn't arrived and I'm thinking pretty confident on the finished MVP. It still has some ironing out to do, but the basic framework is all there, anything else would be a cherry on top and extra functionality.
This was my first application created with Angular, which I honestly didn't grasp fully when I messed with it, however, this time I actually understood what I was working with.

Of course there were some hiccups in developing the application, off the top of my head:
- Learning to work with Loopback was a bit hard at the start, I needed to constantly check the documentation since they have a pretty stable folder structure already set. After figuring it out, it all starts to fall into place and developing actually becomes easier, not to mention the numerous generators they provide to help in being productive instead of writing boilerplate.
- Starting out, I retrieved the queried shows from the API and only after would I request the seasons and later the episodes, it all became quite a big mess since multiple API calls needed to be made, slowing down the application. I couldn't really work around that so I had to get all the information the first time the Show was accessed, build an object with it that I would later save on my database.
- Most of the API calls were being made client-side, which was bad, really bad. I was using Loopback's Angular SDK and all the information was being retrieved in the client and only later sent to the server for saving, I had to rewrite that code so the server could take care of all the hard work and simply supply the Angular client with a nice and tidy object full of information.
- Code organization was kind of all over the place, since it was my first application with Loopback and Angular, I'm pretty sure I made many mistakes, and just tried to fix things along the way. For the next time, I know what I can do better and what I can improve by having gone through the motions once.

All in all, I'm pretty happy with how it turned out, I relied heavily on StackOverflow, Google and all kinds of documentation to get this working. I tried researching some tutorials for the basic things so I could try and get started on the right foot as I didn't want to start off badly and having to scrap the whole thing out and start again. The design of the application isn't very original, and I took some inspiration from other websites, but managed to make it look the best I could.

I also wanted to find somewhere to host the application 25/7, which I ended up being able to do on OpenShift. It was a really big headache getting it to work but I finally did it and it's live on OpenShift! They allowed me to also set up a CNAME in order to redirect my domain to theirs, in that way, the application can be accessed through [ClapprBoard.tiagomartins.xyz](ClapprBoard.tiagomartins.xyz).

The development of this application was a really great experience. It's a completed Minimum Viable Product and it's ready to start being beta tested and improved upon. There are a lot of creases that need to be ironed out, as with any MVP and a lot of room for improvement and awesome features!
