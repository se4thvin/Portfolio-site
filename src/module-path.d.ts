// This declares module paths to help TypeScript resolve imports
declare module "@/components/*" {
  const component: any;
  export default component;
}

declare module "@/data/*" {
  const data: any;
  export default data;
}

declare module "@/lib/*" {
  const lib: any;
  export default lib;
} 