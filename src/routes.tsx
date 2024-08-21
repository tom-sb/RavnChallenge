import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ROUTES } from './utils/constants-routes';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const DashboardView = lazy(() => import('./pages/dashboard/index'));
const TaskView = lazy(() => import('./pages/task/index'));

export const RouterProvider = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={ROUTES.TASK} element={<TaskView />} />
        <Route path={ROUTES.DASHBOARD} element={<DashboardView />} />
        <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} />} />
      </Routes>
    </Suspense>
  );
};

export const AppTransitions = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
        <RouterProvider />
      </CSSTransition>
    </TransitionGroup>
  );
};
