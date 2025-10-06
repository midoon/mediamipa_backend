export enum PostType {
  NEWS = "news",
  ACHIEVEMENT = "achievement",
}

export class Post {
  public id: string;
  public title: string;
  public description: string;
  public image?: string | null;
  public type: PostType;
  public created_at: Date;
  public updated_at: Date;

  constructor(
    id: string,
    title: string,
    description: string,
    type: PostType,
    created_at: Date,
    updated_at: Date,
    image?: string | null
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image ?? null;
    this.type = type;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
