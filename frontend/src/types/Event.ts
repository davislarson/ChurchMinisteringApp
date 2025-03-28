// Event.ts that defines the types for the Event, Member, and Linking interfaces

// Define the Linking type
export interface Linking {
    memberId: number;
    assignmentId: number;
    eventId: number;
    event: Event | null;  // Potentially null, as the event might not be included yet
    member: Member | null; // The member object might be null if not loaded
  }
  
  // Define the Member type
  export interface Member {
    memberId: number;
    assignmentId: number;
    firstName: string;
    lastName: string;
    calling: string;
    birthday: string;
    linkings: Linking[]; // Linkings related to this member
    ministeringEventMembers: Event[]; // Events associated with the member
    ministeringEventMinister1Navigations: Event[]; // Events where this member is a minister 1
    ministeringEventMinister2Navigations: Event[]; // Events where this member is a minister 2
  }
  
  // Define the Event type
  export interface Event {
    eventId: number;
    date: string;
    minister1: number;  // Member ID for minister 1
    minister2: number | null;  // Member ID for minister 2 (nullable)
    activity: string;
    notes: string;
    address: string;
    time: string;
    linkings: Linking[]; // Array of Linkings related to this event
    member: Member | null;  // Member related to this event, could be null
    minister1Navigation: Member | null; // The actual Member object for minister 1, if available
    minister2Navigation: Member | null; // The actual Member object for minister 2, if available
  }
  