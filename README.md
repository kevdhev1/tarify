# 💰 Tarify

Tarify is a web application for freelancers who want to estimate a sustainable price for their projects.

Instead of deciding how much to charge based only on intuition or what seems reasonable, Tarify calculates a price reference based on desired income, monthly expenses, billable hours, project hours, safety margin, and taxes.

## 🎯 The problem

Pricing a freelance project is not just about deciding how much an hour of work is worth.

Desired income, expenses, taxes, and the amount of time that can actually be billed all affect how much a freelancer needs to charge to keep their work financially sustainable.

Tarify was created to turn these factors into a clear pricing reference.

## 🧮 How it works

Tarify calculates a recommended hourly rate and uses it to estimate a sustainable project price.

The calculation takes into account:

* Desired income and monthly expenses.
* Available billable hours.
* Safety margin.
* Income taxes.
* Estimated project hours.

The result is not meant to represent a universal market price or a "correct" number. It is a financial reference based on the information provided by the freelancer.

## 📊 Comparing your expected price

Tarify also lets you compare the price you expected to charge with the calculated sustainable price.

The result is classified into four categories:

* Far below the sustainable price
* Slightly below the sustainable price
* Very close to the sustainable price
* Above the sustainable price

The comparison is not meant to tell freelancers how much they should charge. Factors such as experience, specialization, competition, negotiation, demand, project complexity, and perceived value also influence the final price.

## 💡 Philosophy

Tarify follows a simple idea:

> Sustainability should come before optimization.

The goal is not to find the highest possible price, but to first establish a financial baseline that answers:

> "What price allows me to sustain the way I want to work?"

Other factors can then be used to adjust the price.

## 🛠️ Tech stack

* React
* TypeScript
* Vite
* CSS Modules
* Vitest

## 🧪 Testing

The core pricing logic is covered by unit tests.

The tests cover:

* Pricing calculations
* Price comparisons
* Form validation
* Value parsing
* Default value handling

This allows the business rules to be verified independently from the interface.

## 🚧 Status

Tarify is currently in its first MVP release.

This version focuses on pricing calculations, price comparison, validation, and clear presentation of the result.

Future improvements can be built on top of this foundation without changing the core idea of the application.
