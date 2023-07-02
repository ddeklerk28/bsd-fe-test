# API Documentation

This document provides an overview of the endpoints available in the Trend Spotter API.

---
## Get all trends (`GET`)

Retrieves all trends from the database

- **URL**: `http://localhost:3001/api/trends`
- **Response (200)**:
```javascript
{ data: ITrend[] }
```
---

## Get a specific trend by ID (`GET`)

Retrieves a specific trend from the database based on its ID.

- **URL**: `http://localhost:3001/api/trends/:id`
- **Parameters**:
    - `id` - The ID of the trend

- **Response (200):**
```javascript
{ data: ITrend }
```
---

## Create a new trend (`POST`)

Creates a new trend.

- **URL**: `http://localhost:3001/api/trends`
- **Body**:
```
{
    "name": "value",
    "type": "value"
}
```
- **Response (201):**
```javascript
{ data: ITrend }
```
---

## Update an existing trend (`PUT`)

Updates an existing trend.

- **URL**: `http://localhost:3001/api/trends/:id`
- **Parameters**:
    - `id` - The ID of the trend to update.
- **Body**:
```
{
    "name"?: "value",
    "type"?: "value"
}

// ? - indicates an optional field
```
- **Response (200):**
```javascript
{ data: ITrend }
```
---

## Delete a trend by ID (`DELETE`)

Deletes a trend based on its ID.

- **URL**: `http://localhost:3001/api/trends/:id`
- **Parameters**:
    - `id` - The ID of the trend to delete.
- **Response (200):**
```javascript
{ data: ITrend }
```
---
