---
title: "Basics of Prompting and how to use in ChatGPT and Bard"
date: "2023-07-20"
thumb: "promting.PNG"
tags: [Prompts, Content, Writing]
---

# Basics of Prompting and how to use in ChatGPT and Bard

Basically with a **Prompt** you indicate to the AI what to do.  
You can achieve a lot with simple prompts, but the quality of results depends on how much information you provide it and how well-crafted it is. A prompt can contain information like the instruction or question you are passing to the model and include other details such as context, inputs, or examples. You can use these elements to instruct the model better and as a result get better results.

Let's get started by going over a basic example of a simple prompt:

### Prompt

> The sky is

Output:

> blue
> The sky is blue on a clear day. On a cloudy day, the sky may be gray or white.

As you can see, the language model outputs a continuation of strings that make sense given the context "The sky is". The output might be unexpected or far from the task you want to accomplish.

This basic example also highlights the necessity to provide more context or instructions on what specifically you want to achieve.  

Let's try to improve it a bit:

Prompt:

> Complete the sentence:   
> The sky is  

Output:

> so  beautiful today.

Is that better? Well, you told the model to complete the sentence so the result looks a lot better as it follows exactly what you told it to do ("complete the sentence"). This approach of designing optimal prompts to instruct the model to perform a task is what's referred to as **prompt engineering**.


### Prompt Formatting
You have tried a very simple prompt above. A standard prompt has the following format:

> Question?  

or  

> Instruction  

You can format this into a question answering (QA) format, which is standard in a lot of QA datasets, as follows:

>Q: Question?  
>A:   

When prompting like the above, it's also referred to as zero-shot prompting, i.e., you are directly prompting the model for a response without any examples or demonstrations about the task you want it to achieve. Some large language models do have the ability to perform zero-shot prompting but it depends on the complexity and knowledge of the task at hand.

Given the standard format above, one popular and effective technique to prompting is referred to as few-shot prompting where you provide exemplars (i.e., demonstrations). You can format few-shot prompts as follows:

> Question?  
> Answer  
> Question?  
> Answer  
> Question?  
> Answer  
> Question?  


The QA format version would look like this:

> Q: Question?  
> A: Answer  
> Q: Question?  
> A: Answer  
> Q: Question?  
> A: Answer  
> Q: Question?  
> A:


Keep in mind that it's not required to use QA format. The prompt format depends on the task at hand. For instance, you can perform a simple classification task and give exemplars that demonstrate the task as follows:

Prompt:

> This is awesome! // Positive  
> This is bad! // Negative  
> Wow that movie was rad! // Positive  
> What a horrible show! //  


Output:

> Negative


Few-shot prompts enable in-context learning, which is the ability of language models to learn tasks given a few demonstrations.

### Elements of a Prompt
As we cover more and more examples and applications with prompt engineering, you will notice that certain elements make up a prompt.

A prompt contains any of the following elements:

**Instruction** - a specific task or instruction you want the model to perform

**Context** - external information or additional context that can steer the model to better responses

**Input Data** - the input or question that we are interested to find a response for

**Output Indicator** - the type or format of the output.

You do not need all the four elements for a prompt and the format depends on the task at hand. We will touch on more concrete examples in upcoming guides.

### Examples of Prompts

The previous section introduced a basic example of how to prompt LLMs. 

This section will provide additional examples of how to use prompts to complete various activities while also introducing crucial concepts along the way. Often, going through examples is the greatest method to learn things. The examples below show how to use well-crafted prompts to do various types of tasks.

Topics:
- [Text Summarization](#text-summarization)
- [Information Extraction](#information-extraction)
- [Question Answering](#question-answering)
- [Text Classification](#text-classification)
- [Conversation](#conversation)
- [Code Generation](#code-generation)
- [Reasoning](#reasoning)

---

## Text Summarization
Text summarization is a common task in natural language creation. Text summarization comes in a variety of flavors and domains. Indeed, one of the most promising applications of language models is the capacity to quickly and easily summarize articles and concepts. Let's try a simple summary exercise using prompts.



*Prompt:*
```
Explain antibiotics

A:
```

*Output:*
```
Antibiotics are a type of medication used to treat bacterial infections. They work by either killing the bacteria or preventing them from reproducing, allowing the body’s immune system to fight off the infection. Antibiotics are usually taken orally in the form of pills, capsules, or liquid solutions, or sometimes administered intravenously. They are not effective against viral infections, and using them inappropriately can lead to antibiotic resistance.
```

The "A:" is an explicit prompt format that you use in question answering. You used it here to tell the model that there is an answer expected further. In this example, it's not clear how this is useful vs not using it but we will leave it that for later examples. Let's just assume that this is too much information and you want to summarize it further. In fact, you can instruct the model to summarize into one sentence like so:

*Prompt:*
```
Antibiotics are a type of medication used to treat bacterial infections. They work by either killing the bacteria or preventing them from reproducing, allowing the body’s immune system to fight off the infection. Antibiotics are usually taken orally in the form of pills, capsules, or liquid solutions, or sometimes administered intravenously. They are not effective against viral infections, and using them inappropriately can lead to antibiotic resistance.

Explain the above in one sentence:
```

*Output:*
```
Antibiotics are medications used to treat bacterial infections by either killing the bacteria or stopping them from reproducing, but they are not effective against viruses and overuse can lead to antibiotic resistance.
```

Without paying too much attention to the accuracy of the output above, which is something we will touch on in a later guide, the model tried to summarize the paragraph in one sentence. You can get clever with the instructions but we will leave that for a later chapter. Feel free to pause here and experiment to see if you get better results.

---
## Information Extraction
While language models are trained to do natural language creation and related tasks, they are also adept at categorization and a variety of other natural language processing (NLP) activities. 

Here's an example of a prompt that takes data from a text.

*Prompt:*
```
Author-contribution statements and acknowledgements in research papers should state clearly and specifically whether, and to what extent, the authors used AI technologies such as ChatGPT in the preparation of their manuscript and analysis. They should also indicate which LLMs were used. This will alert editors and reviewers to scrutinize manuscripts more carefully for potential biases, inaccuracies and improper source crediting. Likewise, scientific journals should be transparent about their use of LLMs, for example when selecting submitted manuscripts.

Mention the large language model based product mentioned in the paragraph above:
```

*Output:*
```
The large language model based product mentioned in the paragraph above is ChatGPT.
```

There are many ways you can improve the results above, but this is already very useful.

By now it should be obvious that you can ask the model to perform different tasks by simply instructing it what to do. That's a powerful capability that AI product developers are already using to build powerful products and experiences.


Paragraph source: [ChatGPT: five priorities for research](https://www.nature.com/articles/d41586-023-00288-7) 

---
## Question Answering

Improving the prompt format is one of the best strategies to encourage the model to respond to specific replies. As covered before, a prompt could combine instructions, context, input, and output indicators to get improved results. While these components are not required, it becomes a good practice as the more specific you are with instruction, the better results you will get. Below is an example of how this would look following a more structured prompt.

*Prompt:*
```
Answer the question based on the context below. Keep the answer short and concise. Respond "Unsure about answer" if not sure about the answer.

Context: Teplizumab traces its roots to a New Jersey drug company called Ortho Pharmaceutical. There, scientists generated an early version of the antibody, dubbed OKT3. Originally sourced from mice, the molecule was able to bind to the surface of T cells and limit their cell-killing potential. In 1986, it was approved to help prevent organ rejection after kidney transplants, making it the first therapeutic antibody allowed for human use.

Question: What was OKT3 originally sourced from?

Answer:
```

*Output:*
```
Mice.
```

Context obtained from [Nature](https://www.nature.com/articles/d41586-023-00400-x).

---

## Text Classification
So far, we've used simple statements to accomplish our tasks. As an agile engineer, I need to be able to give better instructions. But that's not all! We also find that providing instructions is not enough for more difficult use cases. Here we need to think more about the different elements that can be used in context and command prompts. Other elements you can provide are `input data` or `examples`. 

Let's try to demonstrate this by providing an example of text classification.

*Prompt:*
```
Classify the text into neutral, negative or positive. 

Text: I think the food was okay. 
Sentiment:
```

*Output:*
```
Neutral
```

You gave the instruction to classify the text and the model responded with `'Neutral'`, which is correct. Nothing is wrong with this but let's say that what you really need is for the model to give the label in the exact format you want. So instead of `Neutral`, you want it to return `neutral`. How do you achieve this? There are different ways to do this. You care about specificity here, so the more information you can provide the prompt, the better results. You can try providing examples to specify the correct behavior. Let's try again:

*Prompt:*
```
Classify the text into neutral, negative or positive. 

Text: I think the vacation is okay.
Sentiment: neutral 

Text: I think the food was okay. 
Sentiment:
```

*Output:*
```
neutral
```

Perfect! This time the model returned `neutral` which is the specific label you were looking for. It seems that the example provided in the prompt helped the model to be specific in its output. 

To highlight why sometimes being specific is important, check out the example below and spot the problem:

*Prompt:*
```
Classify the text into nutral, negative or positive. 

Text: I think the vacation is okay.
Sentiment:
```

*Output:*
```
Neutral
```

What is the problem here? As a hint, the made-up `nutral` label is completely ignored by the model. Instead, the model outputs `Neutral` as it has some bias towards that label. But let's assume that what you really want is `nutral`. How would you fix this? Maybe you can try adding descriptions to the labels or add more examples to the prompt? If you are not sure, we will discuss a few ideas in the upcoming sections.

---

## Conversation
Perhaps one of the interesting things that prompt engineering can accomplish is to dictate the behavior, intent, and identity of LLM systems. This is especially useful for building conversational systems such as customer service chatbots.

For example, let's create a conversation system that can generate more technical and scientific answers to questions. Notice how I explicitly told it how I wanted it to work through the statement. This is sometimes called a *role prompt*. 

*Prompt:*
```
The following is a conversation with an AI research assistant. The assistant tone is technical and scientific.

Human: Hello, who are you?
AI: Greeting! I am an AI research assistant. How can I help you today?
Human: Can you tell me about the creation of blackholes?
AI:
```

*Output:*
```
Sure! Black holes are regions of spacetime where the gravitational force is so strong that nothing, not even light, can escape from it. They are created when a very massive star dies and its core collapses in on itself, forming a singularity of infinite density. The intense gravity of the singularity pulls in all the matter and radiation around it, creating the black hole.
```

Our AI research assistant sounds a bit too technical, right? Okay, let's change this behavior and instruct the system to give more accessible answers. 

*Prompt:*
```
The following is a conversation with an AI research assistant. The assistant answers should be easy to understand even by primary school students.

Human: Hello, who are you?
AI: Greeting! I am an AI research assistant. How can I help you today?
Human: Can you tell me about the creation of black holes?
AI: 
```

*Output:*
```
Sure! Black holes are created when a very massive star runs out of fuel and collapses in on itself. The gravity of the star is so strong that nothing, not even light, can escape its pull. This creates a point in space-time with an intense gravitational force called a black hole.
```

You made some progress. You can continue improving it. If you add more examples, you might get even better results. 

---

## Code Generation
One application where LLM is very effective is code generation. The co-pilot is a good example. There are various code generation tasks that can be performed using smart prompts. Let's see some examples below.

First, let's try a simple program that greets the user. 

*Prompt:*
```
/*
Ask the user for their name and say "Hello"
*/
```

*Output:*
```
let name = prompt("What is your name?");
console.log(`Hello, ${name}!`);
```

Notice that you didn't even need to specify the language to use.

Let's switch levels a bit. The example below shows how powerful LLMs can be with a little more effort in designing the prompts.

*Prompt:*
```
"""
Table departments, columns = [DepartmentId, DepartmentName]
Table students, columns = [DepartmentId, StudentId, StudentName]
Create a MySQL query for all students in the Computer Science Department
"""
```

*Output:*
```
SELECT StudentId, StudentName 
FROM students 
WHERE DepartmentId IN (SELECT DepartmentId FROM departments WHERE DepartmentName = 'Computer Science');
```

This is very impressive. In this case, you provided data about the database schema and asked it to generate a valid MySQL query. 

---

## Reasoning
Perhaps one of the most difficult challenges for LLMs today are those that require some kind of reasoning. One of the most interesting areas is thinking, because you can create all kinds of complex applications out of LLM.

Several tasks that require math skills have been improved. However, it is important to note that current LLMs struggle to perform inference tasks, which require more advanced prompt engineering techniques. These advanced techniques are covered in the following guides. First, let's take a few basic examples to illustrate our computational skills. 

*Prompt:*
```
What is 9,000 * 9,000?
```

*Output:*
```
81,000,000
```

Let's try something more difficult. 

*Prompt:*
```
The odd numbers in this group add up to an even number: 15, 32, 5, 13, 82, 7, 1. 

A: 
```

*Output*
```
No, the odd numbers in this group add up to an odd number: 119.
```

That's incorrect! Let's try to improve this by improving the prompt.

*Prompt:*
```
The odd numbers in this group add up to an even number: 15, 32, 5, 13, 82, 7, 1. 

Solve by breaking the problem into steps. First, identify the odd numbers, add them, and indicate whether the result is odd or even. 
```

*Output:*
```
Odd numbers: 15, 5, 13, 7, 1
Sum: 41 
41 is an odd number.
```
Much better, right? By the way, I've tried several times and sometimes the system fails. Providing better instructions in combination with examples might yield more accurate results.

We will continue to add more common use cases to this section of the guide.

The next section explores more advanced prompt engineering concepts and techniques to improve performance on all of these more difficult tasks. 