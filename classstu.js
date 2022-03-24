class student{
    constructor(name,age)
    {
        this.sname=name;
        this.sage=age;
    }
    display()
    {
        console.log(this.sname+" "+this.sage);
    }
}
let s1 = new student(rahul,19);
s1.display;
