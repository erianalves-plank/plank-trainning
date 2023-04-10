import Crew from "./Crew";
import Crewman from "./Crewman";
import Launch from "./Launch";

export const postData = async (resource: string, dataObject: any) => {
    const response = await fetch(`http://localhost:3000/${resource}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataObject)
    });

    const jsonResponse:any  = await response.json();
    console.log(jsonResponse);
}