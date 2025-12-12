# Plea.com - Legal Services Platform

## Overview
A React-based legal services platform that helps users file cases easily. Built with Vite, React, TypeScript, and Tailwind CSS.

## Project Structure
- `src/` - Source code
  - `App.tsx` - Main application component with routing logic
  - `components/` - Reusable UI components
    - `ui/` - Shadcn/Radix UI components
  - `assets/` - Images and static assets
  - `imports/` - Figma-imported components
  - `styles/` - Global CSS styles
- `vite.config.ts` - Vite build configuration
- `package.json` - Dependencies and scripts

## Development
- Run `npm run dev` to start the development server on port 5000
- The app uses pre-compiled Tailwind CSS

## Key Features
- Multi-step case filing flow
- Lawyer selection
- Document upload
- Payment processing UI
- Mobile responsive design

## Recent Changes
- December 12, 2025: Added Draft Case File page
  - Created DraftCaseFile component with animated loading sequence
  - Shows 5-second AI processing animation with progress bar and step indicators
  - Displays draft case file preview with case details, lawyer info, and documents
  - Navigation: Confirmation → Generate Draft → Draft Case File → Dashboard

- December 12, 2025: Initial Replit setup
  - Configured Vite for Replit (port 5000, allowedHosts)
  - Added TypeScript configuration
  - Set up development workflow
