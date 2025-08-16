# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start the development server with Turbo mode
- `npm run build` - Build the static site for production

## Architecture Overview

This is a Next.js 15 application configured for static site generation and deployment to GitHub Pages. The project uses:

- **Static Export Configuration**: `next.config.ts` is configured with `output: 'export'` for static site generation
- **GitHub Pages Deployment**: Uses `PAGES_BASE_PATH` environment variable for proper base path handling in GitHub Pages
- **App Router**: Uses Next.js 13+ App Router structure with `app/` directory
- **TypeScript**: Full TypeScript setup with strict configuration

## Project Structure

- `app/layout.tsx` - Root layout component with basic HTML structure and metadata
- `app/page.tsx` - Home page component (currently minimal with test content)
- `next.config.ts` - Next.js configuration for static export and GitHub Pages
- `tsconfig.json` - TypeScript configuration with path aliases (`@/*` maps to root)

## Key Configuration Details

- The app is designed for static export (`output: 'export'` in next.config.ts)
- Base path is dynamically set via `PAGES_BASE_PATH` environment variable for GitHub Pages compatibility
- TypeScript path aliases are configured with `@/*` pointing to the project root
- Uses React 19 and Next.js 15 with Turbo mode for development

## Deployment Notes

The project is set up for automatic deployment to GitHub Pages using GitHub Actions. The static export configuration ensures compatibility with GitHub Pages hosting limitations.

## Execution Notes

For any prompt that I give you, if you need clarification, please ask up to 5 clarification questions if needed. Once I have given you my responses, output a list of tasks that you plan on executing in order to accomplish the prompt in its entirety to the TASKLIST.md file.
