import { type PluginItem } from '@babel/core';

export default function (): PluginItem {
   return {
      visitor: {
         Program(path, state) {
            const forbidden = state.opts.props || [];
            path.traverse({
               JSXIdentifier(currency) {
                  const nodeName = currency.node.name;
                  if (forbidden.includes(nodeName)) {
                     currency.parentPath.remove();
                  }
               },
            });
         },
      },
   };
}
