// firestore
import { collection } from "firebase/firestore";
// custom hook
import { useCreateDocument } from "../../../Firebase/firestore-db";
// custom firestore config
import { db } from "../../../Firebase/firebase-config"

const collectionName = "issues";
const collectionRef = collection(db, collectionName);
const cacheName = collectionName;


export function useCreateIssue(){
	/**
	 * create a new document in 'issues' collection.
	 * invalidate any cache with name "issues" and 
	 * trigger refetch for latest documents
	 */
	return useCreateDocument(cacheName, collectionRef)

}