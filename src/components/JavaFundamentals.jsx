import { useState, useEffect, useRef } from 'react';
import InteractiveCard from './InteractiveCard';
import CodeBlock from './CodeBlock';
import './JavaFundamentals.css';

const JavaFundamentals = () => {
    const [visibleCards, setVisibleCards] = useState([]);
    const sectionRef = useRef(null);

    const fundamentals = [
        {
            id: 1,
            title: 'Variables & Data Types',
            description: 'Understanding how Java stores and manipulates data',
            icon: '📦',
            badge: { text: 'Essential', className: 'badge-green' },
            codeExample: `// Primitive Data Types in Java
int age = 21;                    // Integer
double price = 99.99;            // Decimal number
char grade = 'A';                // Single character
boolean isStudent = true;        // True or False

// Reference Types
String name = "Dipesh";          // Text
int[] numbers = {1, 2, 3, 4, 5}; // Array

// Type Casting
int num = (int) 45.67;           // Explicit casting
double decimal = 100;            // Implicit casting`,
            explanation: 'Java is strongly typed, meaning every variable must have a declared type. Primitive types store simple values directly in memory, while reference types store addresses to objects.'
        },
        {
            id: 2,
            title: 'Control Flow (if/else, switch)',
            description: 'Making decisions in your code',
            icon: '🔀',
            badge: { text: 'Essential', className: 'badge-green' },
            codeExample: `// If-Else Statement
int score = 85;
if (score >= 90) {
    System.out.println("Grade A");
} else if (score >= 80) {
    System.out.println("Grade B");
} else {
    System.out.println("Grade C");
}

// Switch Statement
String day = "Monday";
switch (day) {
    case "Monday":
        System.out.println("Start of week");
        break;
    case "Friday":
        System.out.println("Almost weekend!");
        break;
    default:
        System.out.println("Regular day");
}`,
            explanation: 'Control flow statements allow your program to make decisions. Use if-else for complex conditions, and switch for multiple discrete values.'
        },
        {
            id: 3,
            title: 'Loops (for, while, do-while)',
            description: 'Repeating tasks efficiently',
            icon: '🔄',
            badge: { text: 'Essential', className: 'badge-green' },
            codeExample: `// For Loop - when you know iteration count
for (int i = 0; i < 5; i++) {
    System.out.println("Iteration: " + i);
}

// While Loop - condition checked before execution
int count = 0;
while (count < 3) {
    System.out.println("Count: " + count);
    count++;
}

// Do-While Loop - executes at least once
int num = 0;
do {
    System.out.println("Number: " + num);
    num++;
} while (num < 3);

// Enhanced For Loop (for arrays/collections)
int[] numbers = {10, 20, 30, 40};
for (int n : numbers) {
    System.out.println(n);
}`,
            explanation: 'Loops let you execute code repeatedly. Use for loops when you know the iteration count, while loops for unknown iterations, and do-while when you need at least one execution.'
        },
        {
            id: 4,
            title: 'Methods & Functions',
            description: 'Organizing code into reusable blocks',
            icon: '⚙️',
            badge: { text: 'Important', className: 'badge-green' },
            codeExample: `public class Calculator {
    // Method with return value
    public static int add(int a, int b) {
        return a + b;
    }
    
    // Method with no return (void)
    public static void greet(String name) {
        System.out.println("Hello, " + name);
    }
    
    // Method with multiple parameters
    public static double calculateArea(double length, double width) {
        return length * width;
    }
    
    // Method overloading - same name, different parameters
    public static int multiply(int a, int b) {
        return a * b;
    }
    
    public static double multiply(double a, double b) {
        return a * b;
    }
}`,
            explanation: 'Methods are reusable blocks of code that perform specific tasks. They can accept parameters and return values, making your code more organized and maintainable.'
        },
        {
            id: 5,
            title: 'Arrays & Collections',
            description: 'Storing multiple values efficiently',
            icon: '📚',
            badge: { text: 'Important', className: 'badge-green' },
            codeExample: `// Arrays - fixed size
int[] numbers = new int[5];
String[] names = {"Alice", "Bob", "Charlie"};

// Accessing array elements
System.out.println(names[0]);  // Outputs: Alice

// ArrayList - dynamic size
import java.util.ArrayList;
ArrayList<String> students = new ArrayList<>();
students.add("John");
students.add("Jane");
students.remove("John");
System.out.println(students.size());

// 2D Array
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Array iteration
for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}`,
            explanation: 'Arrays store multiple values of the same type with a fixed size. ArrayLists provide dynamic sizing and additional methods for manipulation. Use arrays for performance, ArrayLists for flexibility.'
        },
        {
            id: 6,
            title: 'String Manipulation',
            description: 'Working with text data in Java',
            icon: '📝',
            badge: { text: 'Essential', className: 'badge-green' },
            codeExample: `String text = "Java Programming";

// Common String methods
int length = text.length();                    // 16
String upper = text.toUpperCase();            // JAVA PROGRAMMING
String lower = text.toLowerCase();            // java programming
boolean starts = text.startsWith("Java");     // true
boolean contains = text.contains("Program");  // true
String sub = text.substring(0, 4);           // Java

// String concatenation
String firstName = "John";
String lastName = "Doe";
String fullName = firstName + " " + lastName;

// String comparison
String s1 = "Hello";
String s2 = "Hello";
boolean equal = s1.equals(s2);               // true
// Never use == for String comparison!

// StringBuilder for efficient concatenation
StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(" ");
sb.append("World");
String result = sb.toString();               // Hello World`,
            explanation: 'Strings are immutable in Java. Use String methods for simple operations, but prefer StringBuilder for concatenation in loops for better performance.'
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleCards(fundamentals.map(f => f.id));
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="fundamentals" className="section fundamentals-section" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <span className="badge badge-green">📖 Core Concepts</span>
                    <h2 className="section-title">
                        Java <span className="gradient-text">Fundamentals</span>
                    </h2>
                    <p className="section-description">
                        Master the building blocks of Java programming. These fundamental concepts
                        form the foundation for everything you'll build in Java.
                    </p>
                </div>

                <div className="fundamentals-grid">
                    {fundamentals.map((topic, index) => (
                        <div
                            key={topic.id}
                            className={`stagger-${(index % 5) + 1} ${visibleCards.includes(topic.id) ? 'animate-fade-in-up' : 'opacity-0'
                                }`}
                        >
                            <InteractiveCard
                                title={topic.title}
                                description={topic.description}
                                icon={topic.icon}
                                badge={topic.badge}
                                expandable={true}
                                defaultExpanded={false}
                            >
                                <p className="topic-explanation">{topic.explanation}</p>
                                <CodeBlock code={topic.codeExample} language="java" title={topic.title} />

                                <div className="topic-tips">
                                    <h4>💡 Pro Tip:</h4>
                                    <p>
                                        {topic.id === 1 && "Always initialize variables before using them. Use meaningful variable names to make your code self-documenting."}
                                        {topic.id === 2 && "Keep conditions simple and readable. Consider using switch for multiple discrete values instead of long if-else chains."}
                                        {topic.id === 3 && "Avoid infinite loops! Always ensure your loop condition will eventually become false."}
                                        {topic.id === 4 && "Follow the Single Responsibility Principle - each method should do one thing well."}
                                        {topic.id === 5 && "Choose arrays for performance with fixed size, ArrayList for flexibility with dynamic operations."}
                                        {topic.id === 6 && "Strings are immutable - modifying a String creates a new object. Use StringBuilder for frequent modifications."}
                                    </p>
                                </div>
                            </InteractiveCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JavaFundamentals;
