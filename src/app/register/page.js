import Navbar from "@/components/Navbar";

export default function Page() {
    return (
<>
    <div>
           <Navbar /> 
       </div>
        
        <div className="flex justify-around ">
<h1 className="list-none">Titel</h1>
<div className="flex gap-7 flex-col ">
<ul>Viggo</ul>
<ul>Viggo</ul>
<ul>Viggo</ul>
</div>
        </div>    
       
        </>     
        
    );
}