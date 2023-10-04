import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export const APIURL="https://fakestoreapi.com/products";

export async function getProducts(query) {
  await APIURL(`getProducts:${query}`);
  let products = await localforage.getItem("products");
  if (!products) products = [];
  if (query) {
    products = matchSorter(products, query, { keys: ["id", "title", "category", "price"] });
  }
  return products.sort(sortBy("last", "createdAt"));
}

// export async function createContact() {
//   await fakeNetwork();
//   let id = Math.random().toString(36).substring(2, 9);
//   let contact = { id, createdAt: Date.now() };
//   let contacts = await getContacts();
//   contacts.unshift(contact);
//   await set(contacts);
//   return contact;
// }

export async function getProduct(id) {
  await APIURL(`product:${id}`);
  let products = await localforage.getItem("products");
  let product = products.find(product => product.id === id);
  return product ?? null;
}

// export async function updateContact(id, updates) {
//   await fakeNetwork();
//   let contacts = await localforage.getItem("contacts");
//   let contact = contacts.find(contact => contact.id === id);
//   if (!contact) throw new Error("No contact found for", id);
//   Object.assign(contact, updates);
//   await set(contacts);
//   return contact;
// }

// export async function deleteContact(id) {
//   let contacts = await localforage.getItem("contacts");
//   let index = contacts.findIndex(contact => contact.id === id);
//   if (index > -1) {
//     contacts.splice(index, 1);
//     await set(contacts);
//     return true;
//   }
//   return false;
// }

function set(products) {
  return localforage.setItem("products", products);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
}