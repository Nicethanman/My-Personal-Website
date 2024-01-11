export const projects = [
  {
    title: "Hello Command",
    subtitle: "Firmware Development in C",
    description:
      "I Implemented a command for UBC Orbit's ALEASAT satellite that output a Hello message. The command was tested by manually flashing to a Hercules microcontroller and writing a hardware in the loop test in Python",
    image: "./hello_command_pic.jpg",
    link: "https://github.com/Nicethanman/Hello-Command",
  },
  {
    title: "RISC Machine",
    subtitle: "System Verilog",
    description:
      "In the class Computing Systems I, I created a Turing Complete reduced instruction set machine (RISC) in Verilog. This project spanned 3 months and was debugged using ModelSim test benches, RTL gate level simulation and synthesis on a DE1-SOC FPGA.",
    image: "./ModelSimPic.png",
    link: "https://github.com/Nicethanman?tab=repositories",
  },
  {
    title: "Car Loan Calculator",
    subtitle: "Java and JFrame",
    description:
      "I designed a car loan calculator GUI that calculates the monthly payment of a car loan given a down payment, interest, loan length and credit score.",
    image: "./car_loan_pic.png",
    link: "https://github.com/Nicethanman/Car-Loan-Calculator",
  },
  {
    title: "Personal Website",
    subtitle: "React and TailwindCSS",
    description:
      "This website was built using React, TailwindCSS and HTML. The site consists of a Google Maps Embedded API with a dynamic navigation bar.",
    image: "./website_pic.png",
    link: "https://github.com/Nicethanman/My-Personal-Website",
  },
];

export const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Jesse Hicks",
    company: "Zoozle",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/94.jpg",
    name: "Ruben Alvarez",
    company: "Dooble.io",
  },
];

export const skills = [
  "Java",
  "React",
  "Embedded C",
  "Verilog",
  "Linux",
  "Microcontrollers",
];
