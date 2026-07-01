import React from "react";

// Inline SVGs for all technical stack items
export function DevIcon({ type, className = "w-6 h-6", ...props }) {
    switch (type) {
        case "python":
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
                    <path d="M14.25.18c.9 0 1.66.73 1.66 1.65v2.91h-3.3c-.92 0-1.67.74-1.67 1.66v1.1h4.97c1.37 0 2.49 1.11 2.49 2.49v2.2a2.49 2.49 0 0 1-2.49 2.49h-1.1v-1.66c0-.9-.73-1.66-1.66-1.66h-2.91c-.91 0-1.66-.75-1.66-1.66V6.39a2.49 2.49 0 0 1 2.49-2.49h1.1V2.24A2.07 2.07 0 0 1 12 0c.92 0 1.67.73 1.67 1.65V3.3H12V1.65c0-.9-.73-1.65-1.66-1.65H4.25c-.9 0-1.66.73-1.66 1.65v2.91h3.3c.92 0 1.67-.74 1.67-1.66v-1.1H2.59A2.49 2.49 0 0 0 .1 6.94v2.2c0 1.37 1.11 2.49 2.49 2.49h1.1v1.66c0 .9.73 1.66 1.66 1.66h2.91c.91 0 1.66.75 1.66 1.66v3.31a2.49 2.49 0 0 0 2.49 2.49h1.1v-1.1a1.67 1.67 0 0 1 1.67-1.66h3.3v2.91c0 .91-.75 1.66-1.66 1.66h-5.8c-.9 0-1.66-.73-1.66-1.66v-2.91h3.3c.92 0 1.67-.74 1.67-1.66v-1.1H9.76a2.49 2.49 0 0 1-2.49-2.49v-2.2c0-1.37 1.11-2.49 2.49-2.49h1.1v-1.66c0-.9.73-1.66 1.66-1.66h2.91c.91 0 1.66-.75 1.66-.75V.18z" />
                </svg>
            );

        case "sql":
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                    <path d="M3 12A9 3 0 0 0 21 12"></path>
                </svg>
            );

        case "javascript":
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
                    <path d="M0 0h24v24H0V0zm21.6 17.6c0-1.28-.76-2.22-2.14-2.78-1.32-.54-1.6-.82-1.6-1.36 0-.48.38-.78.96-.78.58 0 .96.26 1.18.72l1.7-1c-.5-.98-1.52-1.56-2.82-1.56-1.92 0-3.16 1.14-3.16 2.76 0 1.64 1.02 2.3 2.66 2.96 1.4.56 1.76.92 1.76 1.54 0 .66-.54 1.06-1.28 1.06-1 .02-1.5-.54-1.74-1.12l-1.76.98c.54 1.28 1.66 1.94 3.44 1.94 2.14.02 3.32-1.04 3.32-2.78zM14.16 19.34c0-1.02-.38-1.66-1.34-2.1l-1.34-.62c-.7-.32-.94-.56-.94-.96 0-.38.3-.64.8-.64.5 0 .78.2.98.62l1.64-1.02c-.52-.92-1.46-1.42-2.62-1.42-1.72 0-2.8 1.08-2.8 2.52 0 1.34.8 1.94 2.06 2.5l1.24.56c.78.36 1.04.66 1.04 1.1 0 .48-.42.78-1.02.78-.7 0-1.12-.4-1.4-1l-1.64.98c.52 1.2 1.54 1.76 3.02 1.76 1.98-.02 3.16-1.06 3.16-2.48z" />
                </svg>
            );

        case "airflow":
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
            );

        case "fastapi":
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
                    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm1.8 17.4h-3.6l1.2-5.4H7.8l6-7.2h3.6l-1.2 5.4h3.6l-6 7.2z" />
                </svg>
            );

        case "mlflow":
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
                    <path d="M12 2L2 22h20L12 2zm0 5l6.5 13H5.5L12 7z M12 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                </svg>
            );

        case "prophet":
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                    <path d="M2 20h20" />
                    <path d="M6 14l6-10 6 6 4-4" />
                </svg>
            );

        case "prometheus":
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
            );

        case "grafana":
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="9" y1="17" x2="9" y2="10" />
                    <line x1="15" y1="17" x2="15" y2="12" />
                    <line x1="9" y1="10" x2="15" y2="12" />
                </svg>
            );

        case "docker":
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
                    <path d="M13.983 8.871h-2.111c-.086 0-.153.07-.153.156v2.109c0 .087.067.158.153.158h2.111c.087 0 .157-.07.157-.158V9.027c0-.086-.07-.156-.157-.156zm-2.73 0H9.141c-.087 0-.158.07-.158.156v2.109c0 .087.071.158.158.158h2.111c.087 0 .159-.07.159-.158V9.027c0-.086-.072-.156-.159-.156zm-2.73 0H6.411c-.087 0-.157.07-.157.156v2.109c0 .087.07.158.157.158h2.112c.087 0 .158-.07.158-.158V9.027c0-.086-.071-.156-.158-.156zm-2.73 0H3.681c-.086 0-.157.07-.157.156v2.109c0 .087.071.158.157.158h2.112c.087 0 .158-.07.158-.158V9.027c0-.086-.071-.156-.158-.156zm2.73-2.73h-2.111c-.087 0-.158.07-.158.156v2.11c0 .086.071.156.158.156h2.111c.087 0 .159-.07.159-.156v-2.11c0-.086-.072-.156-.159-.156zm-2.73 0H6.411c-.087 0-.157.07-.157.156v2.11c0 .086.07.156.157.156h2.112c.087 0 .158-.07.158-.156v-2.11c0-.086-.071-.156-.158-.156zm5.46 0H9.141c-.087 0-.158.07-.158.156v2.11c0 .086.071.156.158.156h2.111c.087 0 .159-.07.159-.156v-2.11c0-.086-.072-.156-.159-.156zm-2.73-2.73H6.411c-.087 0-.157.07-.157.156v2.11c0 .086.07.156.157.156h2.112c.087 0 .158-.07.158-.156v-2.11c0-.086-.071-.156-.158-.156zm14.308 5.759c-.534-.582-1.127-.643-1.503-.643h-.492V4.542h-2.11c-.087 0-.157.07-.157.156v4.329H9.141c-.086 0-.157.07-.157.157v2.11c0 .086.071.156.157.156h10.32c.571 0 1.055-.429 1.156-1 .1-.564-.09-1.153-.492-1.594z" />
                </svg>
            );

        case "githubactions":
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                    <polyline points="7.5 19.79 7.5 14.6 12 12 16.5 14.6 16.5 19.79" />
                    <polyline points="12 22 12 12" />
                    <line x1="12" y1="6.81" x2="12" y2="12" />
                </svg>
            );

        case "git":
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
                    <path d="M23.27 10.58L13.42.73a1.94 1.94 0 0 0-2.8 0L9.04 2.31l3.29 3.29a2.38 2.38 0 0 1 1.48 2.05 2.42 2.42 0 0 1-.72 1.72 2.39 2.39 0 0 1-3.26-.06l-3.3-3.3-2.8 2.8a1.94 1.94 0 0 0 0 2.8l9.85 9.85c.38.38.89.59 1.42.59.53 0 1.04-.21 1.42-.59l9.85-9.85c.38-.38.59-.89.59-1.42a2.03 2.03 0 0 0-.59-1.42zM12.04 14.93a1.21 1.21 0 1 1 0-2.42 1.21 1.21 0 0 1 0 2.42z" />
                </svg>
            );

        default:
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
            );
    }
}
