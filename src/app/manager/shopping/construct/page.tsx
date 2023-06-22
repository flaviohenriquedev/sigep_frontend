import { MdConstruction } from "react-icons/md";

export default function ConstructPage() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10%",
            }}
        >
            <MdConstruction size={200} stroke="2px" />
            <h1 style={{ fontSize: "50pt" }}>PÁGINA EM CONSTRUÇÃO</h1>
        </div>
    );
}
