# Work Day Scheduler

## Description

This is an application that allows the user to input events to plan out their day. Each hour from 9am to 5pm has its own section and allows the user to type anything in the form and save this information for reference later. All fields are dynamically formatted to show if the time of day is in the past, present or future depending on what time of day it is. 

Creator's note: If this is being used after 5pm, all fields will be in the past and therefore greyed out and unable to be typed in as past events are disabled for typing. You can edit the ID of the textarea to change this as they are currently listed as IDs of 9-17 to indicate what time of day they represent in 24 hour time (so 16 would be 4pm). For example, if it is 8pm, you can edit any of the IDs under the textarea to "20" and it should change the styling to red highlighting and allow you to type. 

## Features

- Interactive design that dynamically changes colors of forms based on time of day.
- Ability to save events to local storage. 
- Ability to clear all data on the page with the "clear" button. 
- Current date and time is always displayed at the top of the page. 

## Demo screenshot

![demo-screenshot](https://github.com/McTastic/Day-Planner/blob/main/Assets/Images/Day_Planner_screenshot.png?raw=true)