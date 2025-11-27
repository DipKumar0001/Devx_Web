import { useState, useEffect, useRef } from 'react';
import InteractiveCard from './InteractiveCard';
import CodeBlock from './CodeBlock';
import './ProblemsSolutions.css';

const ProblemsSolutions = () => {
    const [visibleCards, setVisibleCards] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const sectionRef = useRef(null);

    const problems = [
        {
            id: 1,
            title: 'Reverse a String',
            description: 'Write a Java program to reverse a given string',
            category: 'basics',
            difficulty: 'easy',
            badge: { text: 'Easy', className: 'badge-easy' },
            icon: '📝',
            problem: `Given a string, write a method that returns the reversed version of that string.
            
Example:
Input: "Hello World"
Output: "dlroW olleH"`,
            approach: `We can solve this using multiple approaches:
1. Using StringBuilder's reverse() method (simplest)
2. Using character array and two pointers
3. Using recursion`,
            solution: `// Approach 1: Using StringBuilder
public class StringReverser {
    public static String reverseString(String str) {
        return new StringBuilder(str).reverse().toString();
    }
    
    public static void main(String[] args) {
        String original = "Hello World";
        String reversed = reverseString(original);
        System.out.println("Original: " + original);
        System.out.println("Reversed: " + reversed);
    }
}

// Approach 2: Using Character Array
public static String reverseWithArray(String str) {
    char[] chars = str.toCharArray();
    int left = 0, right = chars.length - 1;
    
    while (left < right) {
        // Swap characters
        char temp = chars[left];
        chars[left] = chars[right];
        chars[right] = temp;
        left++;
        right--;
    }
    
    return new String(chars);
}

// Approach 3: Using Recursion
public static String reverseRecursive(String str) {
    if (str.isEmpty()) {
        return str;
    }
    return reverseRecursive(str.substring(1)) + str.charAt(0);
}`,
            complexity: 'Time: O(n), Space: O(n) for approach 1 and 2, O(n) stack space for recursion'
        },
        {
            id: 2,
            title: 'Find Maximum in Array',
            description: 'Find the largest element in an integer array',
            category: 'arrays',
            difficulty: 'easy',
            badge: { text: 'Easy', className: 'badge-easy' },
            icon: '🔢',
            problem: `Given an array of integers, find and return the maximum element.

Example:
Input: [3, 7, 2, 9, 1, 5]
Output: 9`,
            approach: `Iterate through the array once, keeping track of the maximum value seen so far.`,
            solution: `public class MaxFinder {
    public static int findMax(int[] arr) {
        if (arr == null || arr.length == 0) {
            throw new IllegalArgumentException("Array is empty");
        }
        
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
    
    public static void main(String[] args) {
        int[] numbers = {3, 7, 2, 9, 1, 5};
        int maximum = findMax(numbers);
        System.out.println("Maximum value: " + maximum);
    }
}`,
            complexity: 'Time: O(n), Space: O(1)'
        },
        {
            id: 3,
            title: 'Fibonacci Sequence',
            description: 'Generate Fibonacci sequence using recursion and iteration',
            category: 'algorithms',
            difficulty: 'medium',
            badge: { text: 'Medium', className: 'badge-medium' },
            icon: '🔄',
            problem: `Write a program to generate the nth Fibonacci number.

Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21...
Example:
Input: n = 7
Output: 13`,
            approach: `Two main approaches:
1. Recursive (simple but inefficient)
2. Iterative (efficient)
3. Dynamic Programming (memoization)`,
            solution: `// Approach 1: Recursive (Inefficient - O(2^n))
public class Fibonacci {
    public static int fibRecursive(int n) {
        if (n <= 1) return n;
        return fibRecursive(n - 1) + fibRecursive(n - 2);
    }
    
    // Approach 2: Iterative (Efficient - O(n))
    public static int fibIterative(int n) {
        if (n <= 1) return n;
        
        int prev = 0, curr = 1;
        for (int i = 2; i <= n; i++) {
            int next = prev + curr;
            prev = curr;
            curr = next;
        }
        return curr;
    }
    
    // Approach 3: Dynamic Programming with Memoization
    public static int fibDP(int n, int[] memo) {
        if (n <= 1) return n;
        if (memo[n] != 0) return memo[n];
        
        memo[n] = fibDP(n - 1, memo) + fibDP(n - 2, memo);
        return memo[n];
    }
    
    public static void main(String[] args) {
        int n = 7;
        System.out.println("Recursive: " + fibRecursive(n));
        System.out.println("Iterative: " + fibIterative(n));
        System.out.println("DP: " + fibDP(n, new int[n + 1]));
    }
}`,
            complexity: 'Recursive: O(2^n), Iterative: O(n), DP: O(n) with O(n) space'
        },
        {
            id: 4,
            title: 'Palindrome Checker',
            description: 'Check if a string is a palindrome',
            category: 'strings',
            difficulty: 'easy',
            badge: { text: 'Easy', className: 'badge-easy' },
            icon: '🔄',
            problem: `Write a method to check if a given string is a palindrome (reads the same forwards and backwards).

Example:
Input: "radar"
Output: true

Input: "hello"
Output: false`,
            approach: `Compare characters from both ends moving towards the center.`,
            solution: `public class PalindromeChecker {
    public static boolean isPalindrome(String str) {
        // Remove spaces and convert to lowercase
        str = str.replaceAll("\\\\s+", "").toLowerCase();
        
        int left = 0;
        int right = str.length() - 1;
        
        while (left < right) {
            if (str.charAt(left) != str.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("radar"));      // true
        System.out.println(isPalindrome("hello"));      // false
        System.out.println(isPalindrome("A man a plan a canal Panama")); // true
    }
}`,
            complexity: 'Time: O(n), Space: O(1)'
        },
        {
            id: 5,
            title: 'Binary Search Implementation',
            description: 'Implement binary search algorithm',
            category: 'algorithms',
            difficulty: 'medium',
            badge: { text: 'Medium', className: 'badge-medium' },
            icon: '🎯',
            problem: `Implement binary search to find an element in a sorted array.

Example:
Input: arr = [1, 3, 5, 7, 9, 11, 13], target = 7
Output: 3 (index of target)`,
            approach: `Divide and conquer: Compare middle element with target and narrow search to left or right half.`,
            solution: `public class BinarySearch {
    // Iterative approach
    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1; // Not found
    }
    
    // Recursive approach
    public static int binarySearchRecursive(int[] arr, int target, int left, int right) {
        if (left > right) return -1;
        
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            return binarySearchRecursive(arr, target, mid + 1, right);
        } else {
            return binarySearchRecursive(arr, target, left, mid - 1);
        }
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 7, 9, 11, 13};
        int target = 7;
        
        int index = binarySearch(arr, target);
        System.out.println("Found at index: " + index);
    }
}`,
            complexity: 'Time: O(log n), Space: O(1) iterative, O(log n) recursive (stack)'
        }
    ];

    const categories = [
        { id: 'all', name: 'All Problems', icon: '📚' },
        { id: 'basics', name: 'Basics', icon: '📝' },
        { id: 'arrays', name: 'Arrays', icon: '🔢' },
        { id: 'strings', name: 'Strings', icon: '🔤' },
        { id: 'algorithms', name: 'Algorithms', icon: '⚙️' },
    ];

    const filteredProblems = selectedCategory === 'all'
        ? problems
        : problems.filter(p => p.category === selectedCategory);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleCards(problems.map(p => p.id));
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
        <section id="problems" className="section problems-section" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <span className="badge badge-red">💡 Problem Solving</span>
                    <h2 className="section-title">
                        Problems & <span className="gradient-text-red">Solutions</span>
                    </h2>
                    <p className="section-description">
                        Practice makes perfect! Explore common Java problems with detailed solutions,
                        multiple approaches, and complexity analysis.
                    </p>
                </div>

                <div className="category-filter">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat.id)}
                        >
                            <span className="category-icon">{cat.icon}</span>
                            {cat.name}
                        </button>
                    ))}
                </div>

                <div className="problems-grid">
                    {filteredProblems.map((problem, index) => (
                        <div
                            key={problem.id}
                            className={`stagger-${(index % 5) + 1} ${visibleCards.includes(problem.id) ? 'animate-fade-in-up' : 'opacity-0'
                                }`}
                        >
                            <InteractiveCard
                                title={problem.title}
                                description={problem.description}
                                icon={problem.icon}
                                badge={problem.badge}
                                expandable={true}
                                defaultExpanded={false}
                            >
                                <div className="problem-content">
                                    <div className="problem-section">
                                        <h4>📋 Problem Statement</h4>
                                        <p className="problem-text">{problem.problem}</p>
                                    </div>

                                    <div className="problem-section">
                                        <h4>💭 Approach</h4>
                                        <p className="problem-text">{problem.approach}</p>
                                    </div>

                                    <div className="problem-section">
                                        <h4>✅ Solution</h4>
                                        <CodeBlock code={problem.solution} language="java" title={problem.title} />
                                    </div>

                                    <div className="complexity-info">
                                        <h4>⚡ Complexity Analysis</h4>
                                        <p>{problem.complexity}</p>
                                    </div>
                                </div>
                            </InteractiveCard>
                        </div>
                    ))}
                </div>

                {filteredProblems.length === 0 && (
                    <div className="no-problems">
                        <p>No problems found in this category. Check back soon!</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProblemsSolutions;
