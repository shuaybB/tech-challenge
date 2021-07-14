# FE Challenge


## Goal

In this challenge, you will have to request data from a REST API and create a responsive layout to display the retrieved information. You will also have to filter some of the results and implement role-based access to some of the application's features and components.

## Challenge

You have to create a simple notification screen. You will request the list of notifications from a REST API and display the results in custom cards according to the type of the item. The API is protected by an API Key (unique for each applicant) and also by a Bearer token (for each user in the system). The user will have the option to filter the results if its role allows them to. 

## Users

There are 3 types of users, each of them has its own Bearer token:

```
{
    // [userName]: Bearer token
    'ADMIN': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVHlwZSI6IkFETUlOIn0.hR8qytQy9l75YMCW9k9wDYOVJk4qG-qyHC7jqX0I0Ig',
    'FOREIGN_COSTUMER': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVHlwZSI6IkZPUkVJR04ifQ.iTlQm0tUOJ4Boz72mOtsu3MXOgu7BOtR2dOG6xGSy00',
    'DOMESTIC_COSTUMER': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVHlwZSI6IkRPTUVTVElDIn0.OdCKqt8b3WpWe5mPt5GwdxapSilObJv9p_JyxZwW17w'
}
```

## Types of notification items

There are three types of notification items, each one needs to be represented in a different UI card.

### NEW_PRODUCT

```
  {
    "notification_type": "NEW_PRODUCT"
    "notification_id": number
    "product_id": string
    "product_type": "CAR" | "MOTORCYCLE"
    "vin": string
    "created_at": string // "2022-05-10T16:33:43.622Z"
  }

```

### NEW_CONTRACT

```
   {
    "notification_type": "NEW_CONTRACT"
    "notification_id": number
    "sender": number
    "receiver": number
    "expiration_date": string // "2022-05-10T16:33:43.622Z"
  },

```

### NEW_MESSAGE

```
{
    "notification_type": "NEW_MESSAGE"
    "notification_id": number
    "from": number
    "date": string
    "image"?: string // optional
    "message": string
}
```


# API Methods


|Service            |Method |Endpoint                         
|-------------------|-------|----------------------------------------------------|
|List notifications | /GET  |`https://7ktgzkl5ce.execute-api.us-east-1.amazonaws.com/prod/notifications` |
|List users         | /GET  |`https://7ktgzkl5ce.execute-api.us-east-1.amazonaws.com/prod/users`


## Minimum requirements
- We should be able to select which user we're logged in to.
- Fetch notifications from API using the Bearer Authentication token Header.
- Display each notification in a different layout (according to its type).
- Display some data in a nice way (eg. the dates should be formatted, show the users in the notifications by name)
- As an Admin user I can see filter options for my notifications (filter by notification type is enough)

## Bonus
- Treat errors when possible and display custom messages for empty results.
- Test the code
- Ability to save selected notifications and display them in another window (persist between sessions)
- Lazy load images

