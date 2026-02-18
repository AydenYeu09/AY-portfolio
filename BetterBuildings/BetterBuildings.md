# Better Buildings (2024 Congressional App Challenge MD08 Winner) 
**June-Novemeber (2024)**

## Goal
Develop and implement a web app solution that would increase transparency in Montgomery County Public Schools regarding building repairs and infrastructure decisions.

---

## Overview

As a middle school student, I had attended a school that had frequent building issues, ranging from leaking ceilings to bathrooms with broken stall locks. I co-developed this project with my partner
in order to fix these issues.

Features: 
- Student reporting system
- Admin public response system (Announcements, Specific Report Reply)
- Upvoting (Students can like reports and make them appear higher on the screen, or more urgent)
- Vulgar language (blacklist) and similarity detection (with Python SequenceMatcher)

---

## My Contributions

### Frontend V1 
- Designed the preliminary frontend using free themes, HTML, and CSS
- Found challenges with customizability so my partner and I decided to shift to Bootstrap Studio for our frontend

### Backend (Django, JavaScript) 
- Created most models and systems (ranging from announcements, upvoting)
- Used basic JavaScript (guided by tutorials) to design simple website animiations  
- Developed algorithims like report character similarity detection and language blacklist to ensure the website can withstand the use of students 

### Website Hosting and Database Creation 
- Outsourced to a PostgresSQL database instead of Django's native SQL Lite
- Hosted on Heroku

---

## Technical Highlights

- Co-developing a website (learning HTML, CSS, Django, Bootstrap, Introductory JS)
---

## App Pictures and Videos 

### Reporting Page
<img width="500" height="500" alt="image" src="https://github.com/user-attachments/assets/3ca8b1ce-bb40-47ec-846c-72a7473f5a27" />


### View Reports
<img width="500" height="500" alt="image" src="https://github.com/user-attachments/assets/f8f3a61d-8399-4cb5-bf5b-9a98adfb4d6e" />

## Jamie Raskin Local Heroes Feature

[![Watch the video!](https://img.youtube.com/vi/IAZJymYzwpM/0.jpg)](https://www.youtube.com/watch?v=IAZJymYzwpM)

---

## Challenges

- Learning the sheer amount of languages that this project required for functionality
- Prioritizing user-friendliness during the design process
- Finding methods to lock the app to only work at the specific school (IP access) 
---


## Final Outcome

The final version successfully:
- Allowed users to report issues and see admin announcements
- Allowed an admin account to make announcements and resolve reports
- Included functions like similarity detection and account restricting

Despite not having the project implemented due to countywide leadership changes, the project built my experience in coding systems that solve real-world issues. 
