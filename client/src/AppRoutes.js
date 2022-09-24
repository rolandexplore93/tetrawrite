import { motion, AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';

const AppRoutes = ({ isVisible}) => {
    const location = useLocation();

  return (
    <AnimatePresence>
        {
            isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />
            )
        }
        <Routes location={location} key={location.pathname}>
            {/* App routes */}
            <Route path="/"></Route>
        </Routes>
    </AnimatePresence>
  )
}

export default AppRoutes
