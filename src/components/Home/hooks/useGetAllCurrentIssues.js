// firestore
import { collection, query, orderBy } from "firebase/firestore";
// custom firebase config
import { db } from "../../../Firebase/firebase-config";
// custom hooks
import { useGetCollection } from "../../../Firebase/firestore-db";

const collectionName = "issues";
const collectionRef = collection(db, collectionName);
const cacheName = collectionName;
const queryRef = query(collectionRef, orderBy('status', "desc"))


export function useGetAllCurrentIssues(){
	/**
	 * get all documents from  'issues' collection ordered by 'status'
	 * cache collection with cache name 'issues'
	 */
	return useGetCollection(cacheName, queryRef)

}