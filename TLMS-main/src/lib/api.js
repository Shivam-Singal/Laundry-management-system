import { User } from "@auth0/auth0-spa-js";

const FIREBASE_DOMAIN =
  // "https://react-router-42a29-default-rtdb.firebaseio.com/";
  "https://thapar-lms-default-rtdb.firebaseio.com/";

export async function getAllNames(){
  const dat = JSON.stringify(localStorage.getItem("email"));
  console.log(dat);
  const response = await fetch(`${FIREBASE_DOMAIN}.json`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }
  const transformedNames = [];
  for (const key in data) {
    const NameObj = {
      id: key,
      ...data[key],
    };
    transformedNames.push(NameObj);
  }
  console.log(transformedNames);
  const transformedOrders=[];
  for(const name in transformedNames){
    const key=transformedNames[name].id;
    if(key=='comments'){
      continue;
    }
    const response = await fetch(`${FIREBASE_DOMAIN}/${key}/orders.json`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Could not fetch Orders.");
    }
    for (const key in data) {
      const quoteObj = {
        id: key,
        ...data[key],
      };
      transformedOrders.push(quoteObj);
    }
  }
  console.log(transformedOrders);
  return transformedOrders;
}

export async function getAllQuotes() {
  const dat = JSON.stringify(localStorage.getItem("email"));
  console.log(dat);
  const response = await fetch(`${FIREBASE_DOMAIN}/${dat}/orders.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch Orders.");
  }
  const transformedQuotes = [];
  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };
    transformedQuotes.push(quoteObj);
  }
  return transformedQuotes;
}



export async function getSingleQuote(quoteID){
  const response = await fetch(`${FIREBASE_DOMAIN}.json`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }
  const transformedNames = [];
  for (const key in data) {
    const NameObj = {
      id: key,
      ...data[key],
    };
    transformedNames.push(NameObj);
  }
  for(const i in transformedNames){
    for(const j in transformedNames[i].orders){
      if(j==quoteID){
        return transformedNames[i].orders[j];
      }
    }
  }
  return transformedNames;
}


export async function deleteUserOrder(OrderId,UserId){
  const response = await fetch(
    `${FIREBASE_DOMAIN}/${UserId}/orders/${OrderId}.json`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not delete");
  }
  return null;
}

export async function addUserOrder(Order,UserId){
  const response = await fetch(`${FIREBASE_DOMAIN}/${UserId}/orders.json`, {
    method: "POST",
    body: JSON.stringify(Order),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }
  return null;
}

export async function ApproveOrder(OrderId){
  const response = await fetch(`${FIREBASE_DOMAIN}.json`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }
  const transformedNames = [];
  for (const key in data) {
    const NameObj = {
      id: key,
      ...data[key],
    };
    transformedNames.push(NameObj);
  }
  const UserId="";
  console.log(transformedNames);
  for(const name in transformedNames){
    if(transformedNames[name].orders[OrderId]>0)
    UserId=transformedNames[name];
  }
  console.log(UserId);
  const Order = await fetch(`${FIREBASE_DOMAIN}/${UserId}/orders/${OrderId}.json`);
  Order.status="Order Approved";
  console.log(Order);
  while(1){}
  //const Order={};
  response = await fetch(
    `${FIREBASE_DOMAIN}/${UserId}/orders/${OrderId}.json`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not delete");
  }
  response = await fetch(`${FIREBASE_DOMAIN}/${UserId}/orders.json`, {
    method: "POST",
    body: JSON.stringify(Order),
    headers: {
      "Content-Type": "application/json",
    },
  });
  data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }
  return null;
  
  // console.log("Hiii");
  // const response = await fetch(`${FIREBASE_DOMAIN}.json`);
  // const data = await response.json();
  // if (!response.ok) {
  //   throw new Error(data.message || "Could not fetch quotes.");
  // }
  // const transformedNames = [];
  // for (const key in data) {
  //   const NameObj = {
  //     id: key,
  //     ...data[key],
  //   };
  //   transformedNames.push(NameObj);
  // }
  // console.log("Hiiiiiiiiiiiiiiiiiiiiiiiiii");
  // for(const i in transformedNames){
  //   for(const j in transformedNames[i].orders){
  //     if(j==OrderId){
  //       ///orders/-MqEkjl-moFVO4T1dIwi/status
  //       //(${FIREBASE_DOMAIN}/${i}/orders/${j}/status).setvalue("Order Approved");
  //       // console.log(i);
  //       // console.log(j);
  //       // const response = await fetch(`${FIREBASE_DOMAIN}/${i}/orders/${j}.json`, {
  //       //   method: "POST",
  //       //   body: JSON.stringify("Order Approved"),
  //       // });
  //       const killmenow=FIREBASE_DOMAIN.child(i).child(j).child('status');
  //       console.log(killmenow);
  //       killmenow.transaction(function() {
  //         return "Order Approved";
  //      });
  //       return true;
  //     }
  //   }
  // }
  // return false;
}


export async function getUserId(OrderId)
{
  const response = await fetch(`${FIREBASE_DOMAIN}.json`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }
  const transformedNames = [];
  for (const key in data) {
    const NameObj = {
      id: key,
      ...data[key],
    };
    transformedNames.push(NameObj);
  }
  console.log(transformedNames);
  for(const name in transformedNames){
    if(transformedNames[name].orders[OrderId]>0)
    return transformedNames[name];
  }
  return null;
}



export async function addQuote(quoteData) {
  const dat = JSON.stringify(localStorage.getItem("email"));
  console.log(dat);
  const response = await fetch(`${FIREBASE_DOMAIN}/${dat}/orders.json`, {
    method: "POST",
    body: JSON.stringify(quoteData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }

  return null;
}

export async function deleteQuote(quoteId) {
  const dat = JSON.stringify(localStorage.getItem("email"));
  console.log(dat);
  const response = await fetch(
    `${FIREBASE_DOMAIN}/${dat}/orders/${quoteId}.json`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not delete");
  }
  return null;
}
export async function addComment(requestData) {
  const dat = JSON.stringify(localStorage.getItem("email"));
  console.log(dat);
  const response = await fetch(
    `${FIREBASE_DOMAIN}/${dat}/comments/${requestData.quoteId}.json`,
    {
      method: "POST",
      body: JSON.stringify(requestData.commentData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add comment.");
  }

  return { commentId: data.name };
}

export async function getAllComments(quoteId) {
  const dat = JSON.stringify(localStorage.getItem("email"));
  console.log(dat);
  const response = await fetch(
    `${FIREBASE_DOMAIN}/${dat}/comments/${quoteId}.json`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get comments.");
  }

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    transformedComments.push(commentObj);
  }

  return transformedComments;
}
