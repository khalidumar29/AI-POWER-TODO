import { database } from "@/appwriter";
import { getTodosGroupByColumn } from "@/lib/getTodosGroupByColumn";
import { Board, Column, Todo, TypeColumn } from "@/typing";
import { create } from "zustand";

interface BoardState {
  board: Board;
  getBoard: () => void;
  setBoardState: (board: Board) => void;
  updateTodoInDB: (todo: Todo, columnID: TypeColumn) => void;
  searchString: string;
  setSearchString: (searchString: string) => void;
}

export const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypeColumn, Column>(),
  },
  searchString: "",
  setSearchString: (searchString: string) => set({ searchString }),
  getBoard: async () => {
    const board = await getTodosGroupByColumn();
    set({ board });
  },
  setBoardState: (board) => set({ board }),
  updateTodoInDB: async (todo, columnID) => {
    await database.updateDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
      todo.$id,
      {
        title: todo.title,
        status: columnID,
      }
    );
  },
}));
