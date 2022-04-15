// firestore
import { collection } from "firebase/firestore";
// custom firebase config
import { db } from "../../../Firebase/firebase-config";
// custom hooks
import { useUpdateDocument } from "../../../Firebase/firestore-db";

const collectionName = "issues";
const collectionRef = collection(db, collectionName);
const cacheName = collectionName;


export function useUpdateIssue(){
	/**
	 * update document with given id in 'issues' collection
	 * invalidate and update cache with cache name 'issues'
	 */
	return useUpdateDocument(cacheName, collectionRef)

}