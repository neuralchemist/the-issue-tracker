// firestore
import { collection } from "firebase/firestore";
// custom hook
import { useUpdateDocument } from "../../../Firebase/firestore-db";
// custom firestore config
import { db } from "../../../Firebase/firebase-config"

const collectionName = "issues";
const collectionRef = collection(db, collectionName);
const cacheName = collectionName;


export function useUpdateIssue(){
	/**
	 * update a document with given id in 'issues' collection.
	 * invalidate any cache with name "issues" and 
	 * trigger refetch for latest documents
	 */
	return useUpdateDocument(cacheName, collectionRef)

}