import React from "react";

type ProtectedRouteProps = {
  /** Component to route to if validated */
  component: React.ComponentType<any>;

  /** Routing validation check */
  validator: boolean;

  /** Fallback route in case validation fails */
  fallBack: string;
};

/**
 * Conditional route used for all routes that require a specific validator.
 * Ex: If user is authenticated, the component passed to the route is rendered,
 * otherwise user is redirected to fallback route.
 * @param param0 component to render and rest props
 */
const ProtectedRoute = () => <></>;

export { ProtectedRoute };
