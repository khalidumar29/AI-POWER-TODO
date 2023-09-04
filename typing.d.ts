import { type } from "os";

interface Board {
  columns: Map<string, string, Column>;
}

type TypeColumn = "todo" | "inprogress" | "done";

interface Column {
  id: TypeColumn;
  todos: Todo[];
}

interface Todo {
  $id: string;
  $createdAt: string;
  title: string;
  status: TypeColumn;
  image?: string;
}

interface Image {
  bucketId: string;
  field: string;
}
