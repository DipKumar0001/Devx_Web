import { useState, useEffect, useRef } from 'react';
import InteractiveCard from './InteractiveCard';
import CodeBlock from './CodeBlock';
import './OOPConcepts.css';

const OOPConcepts = () => {
    const [visibleCards, setVisibleCards] = useState([]);
    const sectionRef = useRef(null);

    const oopTopics = [
        {
            id: 1,
            title: 'Classes & Objects',
            description: 'The foundation of Object-Oriented Programming',
            icon: '🏗️',
            badge: { text: 'Fundamental', className: 'badge-green' },
            codeExample: `// Class Definition - Blueprint for objects
public class Student {
    // Instance variables (attributes)
    private String name;
    private int age;
    private String studentId;
    
    // Constructor - initializes objects
    public Student(String name, int age, String studentId) {
        this.name = name;
        this.age = age;
        this.studentId = studentId;
    }
    
    // Methods (behaviors)
    public void study() {
        System.out.println(name + " is studying");
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("ID: " + studentId);
    }
    
    // Getter and Setter
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
}

// Creating and using objects
Student student1 = new Student("Dipesh", 21, "CS123");
student1.study();
student1.displayInfo();`,
            explanation: 'A class is a blueprint that defines properties (attributes) and behaviors (methods). An object is an instance of a class. Think of a class as a cookie cutter and objects as the actual cookies.',
            keyPoints: [
                'Classes define the structure, objects are actual instances',
                'Use private variables with public getters/setters (encapsulation)',
                'Constructors initialize object state',
                'this keyword refers to the current object'
            ]
        },
        {
            id: 2,
            title: 'Inheritance',
            description: 'Building hierarchies and reusing code',
            icon: '👨‍👩‍👧',
            badge: { text: 'Core Concept', className: 'badge-green' },
            codeExample: `// Parent Class (Superclass)
public class Animal {
    protected String name;
    protected int age;
    
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void eat() {
        System.out.println(name + " is eating");
    }
    
    public void sleep() {
        System.out.println(name + " is sleeping");
    }
}

// Child Class (Subclass) - inherits from Animal
public class Dog extends Animal {
    private String breed;
    
    public Dog(String name, int age, String breed) {
        super(name, age);  // Call parent constructor
        this.breed = breed;
    }
    
    // Override parent method
    @Override
    public void eat() {
        System.out.println(name + " the dog is eating dog food");
    }
    
    // New method specific to Dog
    public void bark() {
        System.out.println(name + " says Woof!");
    }
}

// Using inheritance
Dog myDog = new Dog("Buddy", 3, "Golden Retriever");
myDog.eat();    // Overridden method
myDog.sleep();  // Inherited method
myDog.bark();   // Dog-specific method`,
            explanation: 'Inheritance allows a class to acquire properties and methods from another class. The child class inherits everything from the parent and can add new features or modify existing ones.',
            keyPoints: [
                'Use "extends" keyword for inheritance',
                'super() calls parent class constructor',
                '@Override annotation for overriding methods',
                'Promotes code reusability and logical hierarchies'
            ]
        },
        {
            id: 3,
            title: 'Polymorphism',
            description: 'One interface, multiple implementations',
            icon: '🎭',
            badge: { text: 'Advanced', className: 'badge-red' },
            codeExample: `// Method Overloading - Compile-time Polymorphism
public class Calculator {
    // Same method name, different parameters
    public int add(int a, int b) {
        return a + b;
    }
    
    public double add(double a, double b) {
        return a + b;
    }
    
    public int add(int a, int b, int c) {
        return a + b + c;
    }
}

// Method Overriding - Runtime Polymorphism
class Shape {
    public double calculateArea() {
        return 0;
    }
}

class Circle extends Shape {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    private double length, width;
    
    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }
    
    @Override
    public double calculateArea() {
        return length * width;
    }
}

// Polymorphic behavior
Shape shape1 = new Circle(5);
Shape shape2 = new Rectangle(4, 6);
System.out.println(shape1.calculateArea());  // Circle's area
System.out.println(shape2.calculateArea());  // Rectangle's area`,
            explanation: 'Polymorphism means "many forms". It allows objects of different types to be treated uniformly through a common interface while maintaining their specific behaviors.',
            keyPoints: [
                'Compile-time: Method overloading (same name, different params)',
                'Runtime: Method overriding (parent reference, child object)',
                'Enables flexibility and extensibility',
                'Use parent type reference for child objects'
            ]
        },
        {
            id: 4,
            title: 'Encapsulation',
            description: 'Data hiding and access control',
            icon: '🔒',
            badge: { text: 'Essential', className: 'badge-green' },
            codeExample: `public class BankAccount {
    // Private variables - hidden from outside
    private String accountNumber;
    private double balance;
    private String ownerName;
    
    // Constructor
    public BankAccount(String accountNumber, String ownerName) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = 0.0;
    }
    
    // Public methods - controlled access
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
        } else {
            System.out.println("Invalid amount");
        }
    }
    
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
        } else {
            System.out.println("Insufficient balance or invalid amount");
        }
    }
    
    // Getter - read access only
    public double getBalance() {
        return balance;
    }
    
    public String getAccountNumber() {
        return accountNumber;
    }
    
    // No setter for balance - controlled through deposit/withdraw
}

// Usage
BankAccount account = new BankAccount("123456", "Dipesh");
account.deposit(1000);
account.withdraw(500);
System.out.println("Balance: " + account.getBalance());
// account.balance = 10000; // ERROR! Cannot access private field`,
            explanation: 'Encapsulation bundles data and methods together while hiding internal implementation details. It provides controlled access through public methods and protects data integrity.',
            keyPoints: [
                'Use private for variables, public for methods',
                'Provide getters/setters for controlled access',
                'Validates data before modification',
                'Enhances security and maintainability'
            ]
        },
        {
            id: 5,
            title: 'Abstraction',
            description: 'Hiding complexity, showing only essentials',
            icon: '🎨',
            badge: { text: 'Advanced', className: 'badge-red' },
            codeExample: `// Abstract Class
public abstract class Vehicle {
    protected String brand;
    protected int year;
    
    public Vehicle(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }
    
    // Abstract method - no implementation
    public abstract void start();
    public abstract void stop();
    
    // Concrete method
    public void displayInfo() {
        System.out.println(brand + " - " + year);
    }
}

// Concrete class implementing abstract methods
public class Car extends Vehicle {
    public Car(String brand, int year) {
        super(brand, year);
    }
    
    @Override
    public void start() {
        System.out.println("Car engine starts with key");
    }
    
    @Override
    public void stop() {
        System.out.println("Car engine stops");
    }
}

// Interface - 100% abstraction
public interface Drivable {
    void accelerate();
    void brake();
    void turn(String direction);
}

// Implementing interface
public class Motorcycle implements Drivable {
    @Override
    public void accelerate() {
        System.out.println("Motorcycle accelerates");
    }
    
    @Override
    public void brake() {
        System.out.println("Motorcycle brakes");
    }
    
    @Override
    public void turn(String direction) {
        System.out.println("Turning " + direction);
    }
}`,
            explanation: 'Abstraction focuses on what an object does rather than how it does it. Abstract classes and interfaces define contracts that concrete classes must implement, hiding complex implementation details.',
            keyPoints: [
                'Abstract classes: Can have both abstract and concrete methods',
                'Interfaces: Define contracts (all methods abstract before Java 8)',
                'Cannot instantiate abstract classes or interfaces',
                'Reduces complexity by hiding implementation details'
            ]
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleCards(oopTopics.map(t => t.id));
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
        <section id="oop" className="section oop-section" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <span className="badge badge-red">🎯 Core Principles</span>
                    <h2 className="section-title">
                        Object-Oriented <span className="gradient-text-red">Programming</span>
                    </h2>
                    <p className="section-description">
                        Master the four pillars of OOP. These concepts are essential for building
                        scalable, maintainable, and professional Java applications.
                    </p>
                </div>

                <div className="oop-grid">
                    {oopTopics.map((topic, index) => (
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

                                <div className="key-points">
                                    <h4>🔑 Key Points:</h4>
                                    <ul>
                                        {topic.keyPoints.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </InteractiveCard>
                        </div>
                    ))}
                </div>

                <div className="oop-summary">
                    <h3>Why OOP Matters</h3>
                    <div className="summary-grid">
                        <div className="summary-card">
                            <span className="summary-icon">🔄</span>
                            <h4>Reusability</h4>
                            <p>Write once, use many times through inheritance</p>
                        </div>
                        <div className="summary-card">
                            <span className="summary-icon">🛡️</span>
                            <h4>Security</h4>
                            <p>Protect data with encapsulation</p>
                        </div>
                        <div className="summary-card">
                            <span className="summary-icon">🧩</span>
                            <h4>Modularity</h4>
                            <p>Break complex problems into manageable pieces</p>
                        </div>
                        <div className="summary-card">
                            <span className="summary-icon">⚡</span>
                            <h4>Flexibility</h4>
                            <p>Adapt and extend with polymorphism</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OOPConcepts;
