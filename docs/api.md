# API REST Specification

## 1 Schemas

### 1.1 Errors

#### Error : `Object`

| Property  | Type     | Required | Description                                   |
| --------- | -------- | -------- | --------------------------------------------- |
| `status`  | `Number` | ✔        | One of a server-defined set of error codes.   |
| `message` | `String` | ✔        | A human-readable representation of the error. |

### 1.2 References

#### User : `Object`

| Property | Type       | Required | Description                        |
| -------- | ---------- | -------- | ---------------------------------- |
| `_id`    | `ObjectId` |          | An unique identification for user. |
| `name`   | `String`   | ✔        | User name.                         |
| `email`  | `String`   | ✔        | User email.                        |

#### ShipmentInfo : `Object`

| Property     | Type     | Required | Description             |
| ------------ | -------- | -------- | ----------------------- |
| `province`   | `String` | ✔        | Province name.          |
| `city`       | `String` | ✔        | City name.              |
| `street`     | `String` | ✔        | Stree name.             |
| `department` | `String` |          | Department number.      |
| `number`     | `String` | ✔        | Address number.         |
| `phone`      | `String` | ✔        | Reference phone number. |

#### CreditCard : `Object`

| Property | Type     | Required | Description         |
| -------- | -------- | -------- | ------------------- |
| `number` | `String` | ✔        | Credit card number. |
| `name`   | `String` | ✔        | Owner name.         |

#### Products : `Object`

| Property | Type       | Required | Description                           |
| -------- | ---------- | -------- | ------------------------------------- |
| `_id`    | `ObjectId` | ✔        | An unique identification for product. |
| `final`  | `String`   | ✔        | Final price for a product.            |
| `amount` | `String`   | ✔        | Quantity bought.                      |
| `total`  | `String`   | ✔        | Price without discount.               |

#### Sale : `Object`

| Property       | Type                | Required | Description                         |
| -------------- | ------------------- | -------- | ----------------------------------- |
| `user`         | `User`              | ✔        | An unique identification for user   |
| `shipmentInfo` | `ShipmentInfo`      | ✔        | The surname of the employee.        |
| `creditCard`   | `CreditCard`        | ✔        | The lastname of the employee.       |
| `products`     | `Array of Products` | ✔        | The e-mail address of the employee. |
| `coupon`       | `String`            | ✔        | The type of employee its refer.     |
| `date`         | `Date`              | ✔        | The type of employee its refer.     |

## 2 Endpoints

- `GET: /` Returns all sales.

- `GET: /{id}` Returns a particular sale.

- `DELETE: /{id}` Delete a sale.

* `POST: /` Create a new Sale.

**Body**

| Property       | Type                | Required | Description                         |
| -------------- | ------------------- | -------- | ----------------------------------- |
| `user`         | `User`              | ✔        | An unique identification for user   |
| `shipmentInfo` | `ShipmentInfo`      | ✔        | The surname of the employee.        |
| `creditCard`   | `CreditCard`        | ✔        | The lastname of the employee.       |
| `products`     | `Array of Products` | ✔        | The e-mail address of the employee. |
| `coupon`       | `String`            | ✔        | The type of employee its refer.     |
