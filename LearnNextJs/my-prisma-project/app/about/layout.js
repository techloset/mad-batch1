

export default function AboutLayout({ children }) {
    return (

        <div style={{ backgroundColor: 'green' }}>
            <h1>about Header</h1>
            {children}
            <h1>about Footer</h1>
        </div>

    )
}
