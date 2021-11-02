export class Provider {
    id:number | undefined;
    name:string | undefined;
    leadTime:number | undefined; //days
    email:string | undefined;

  constructor(
    id?: number, 
    name?: string, 
    leadTime?: number, 
    email?: string
) {
    this.id = id
    this.name = name
    this.leadTime = leadTime
    this.email = email
  }

}
