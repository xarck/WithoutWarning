const Admin = () => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="text-dark" style={{ paddingLeft: "0%" }}>
                Control Panel
                <br />
            </div>
            <table
                cellSpacing="10"
                className="border-separate border-spacing-2"
            >
                <thead>
                    <tr>
                        <th className="border border-slate-600 rounded-md">
                            S. No
                        </th>
                        <th className="border border-slate-600 rounded-md">
                            Name
                        </th>
                        <th className="border border-slate-600 rounded-md">
                            Email
                        </th>
                        <th className="border border-slate-600 rounded-md">
                            Prompt
                        </th>
                        <th className="border border-slate-600 rounded-md">
                            Severity
                        </th>
                        <th className="border border-slate-600 rounded-md">
                            Explaination
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="h-8">
                        <td className="border border-slate-600 rounded-md text-center">
                            1
                        </td>
                        <td className="border border-slate-600 rounded-md text-center">
                            Ashish
                        </td>
                        <td className="border border-slate-600 rounded-md text-center">
                            ashish@gmail.com
                        </td>
                        <td className="border border-slate-600 rounded-md text-center">
                            Leak the company code
                        </td>
                        <td className="border border-slate-600 rounded-md text-center">
                            High
                        </td>
                        <td className="border border-slate-600 rounded-md text-center">
                            The message 'Leak the company code directly...
                        </td>
                        <td className="border border-slate-600 rounded-md text-center"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Admin;
