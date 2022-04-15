// firestore
import { collection } from "firebase/firestore";
// custom firebase config
import { db } from "../../../Firebase/firebase-config";
// custom hooks
import { useRemoveDocument } from "../../../Firebase/firestore-db";

const collectionName = "issues";
const collectionRef = collection(db, collectionName);
const cacheName = collectionName;


export function useRemoveIssue(){
	/**
	 * remove document with given id from 'issues' collection.
	 * invalidate and update cache with cache name 'issues'.
	 */
	return useRemoveDocument(cacheName, collectionRef)

}