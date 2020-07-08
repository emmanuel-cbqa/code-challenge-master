# Wonderschool Coding Challenge

## Introduction

Thanks for your interest in joining the Wonderschool engineering team! Before we proceed with more
formal interviews, we ask that all candidates submit a coding challenge. The coding challenge is
a foundational piece of our process and it's referenced later in our process during the technical 
interviews.

For an experienced web developer, the coding challenge should not take longer than **2-3 hours** to 
complete.

If at any point you have questions concerning the coding challenge and/or interview process, please
do not hesitate to email engineering@wonderschool.com.

## Coding Challenge

The coding challenge revolves around building a task list. Tasks belong to groups and can have
dependencies on one another (i.e. if task X depends on task Y, task X cannot be completed until
task Y is completed). The challenge includes 2 components:

* Build React-based UI
* Design database schema

### Build React-based UI

The UI consists of 2 screens:

* **Overview**: Displays a list of all the groups along with their completion status. Clicking on 
  a group should render the detail screen.

* **Detail**: Displays a list of all the tasks in the selected group and allows the user to toggle 
  the completion status of unlocked tasks.

The screens should look like this:

![screen design](https://user-images.githubusercontent.com/314351/56453206-d1ec2580-62f3-11e9-83d7-67aff2e1deef.png)

The data you should use to populate your implementation is available at _public/data.json_ and can 
be loaded from http://localhost:3000/data.json. SVG assets for the icons used in the design 
also live in _public/_ and can be loaded similarly.

Some things to keep in mind:

* Locked tasks cannot have their completion status toggled
* Tasks remain locked until all of their dependencies have been completed
* Your implementation should resemble the above design
* **Please don't introduce any new dependencies**, you should have everything you need to complete
  the challenge
* We value well structured code that follows best practices

### Design Database Schema

Design a schema in SQL to store the task list data. You can add the SQL code needed to create
the schema to _schema.sql_. The schema should define all tables, columns, and constraints needed
to store the task list data.

## Getting Started

To get started, clone this repo to your local machine. Next you'll want to install the dependencies
and fire up the app:

```
npm install
npm start
```

At this point, the app should be running in development mode and any local modifications you make
will be automatically detected and result in the app to reload.

You should only need to add/modify code in the _src/_ directory.

## Submission

To submit your coding challenge, commit all your changes to the `master` branch and run the 
following commands:

```
# Make sure all changes were committed
git diff-index --quiet HEAD -- || echo 'You have uncommitted changes!'

# Create bundle to submit
git bundle create coding-challenge.bundle HEAD master
```

Email the generated _coding-challenge.bundle_ file to engineering@wonderschool.com. We do our 
best to review and respond to submissions within 1-2 business days.

Thanks for taking the time to do this coding challenge and here's hoping we talk soon!
