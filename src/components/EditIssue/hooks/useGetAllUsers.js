// firestore
import { collection } from "firebase/firestore";
// custom firestore config
import { db } from "../../../Firebase/firebase-config";
// custom hooks
import { useGetCollection } from "../../../Firebase/firestore-db";

const collectionName = "users";
const collectionRef = collection(db, collectionName);
const cacheName = collectionName;


export function useGetAllUsers(){
	/**
	 * get all users from 'users' collection.
	 * cache fetched users with cache name 'users'
	 */
	return useGetCollection(cacheName, collectionRef)

}