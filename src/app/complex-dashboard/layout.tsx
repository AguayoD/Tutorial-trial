export default function DashboardLayout({
    children,
    user,
    revenue,
    notification,
} : {
    children : React.ReactNode;
    user : React.ReactNode;
    revenue : React.ReactNode;
    notification : React.ReactNode;
}) {
    return (
        <>
        <div>
            <div>{children}</div> {/*component ni page.tsx */}
            <div style ={{display : "flex "}}>
                <div style = {{display : "flex", flexDirection: "column"}}>
                    <div>{user}</div>
                    <div>{revenue}</div>
                </div>
                <div style ={{display : "flex", flex: 1}}>{notification}</div>
            </div>
        </div>
        </>
    );
}