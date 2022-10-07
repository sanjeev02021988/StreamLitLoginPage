import React, { useCallback, useState, createContext } from "react"
import PropTypes from "prop-types"
import { IconCheck } from "@tabler/icons"
import { Notification } from "@mantine/core"
import "./NotificationProvider.scss"

export const NotificationContext = createContext()

/**
 * Provider for showing notifications (Toast message)
 * @param {object} params will havechildren as prop
 * @returns {element}
 */
export default function NotificationProvider({ children }) {
  // State variable to toggle notification.
  const [isNotificationVisible, showNotification] = useState(false)

  // Method to close notification.
  const closeNotification = useCallback(() => {
    showNotification(false)
  }, [])

  return (
    <NotificationContext.Provider value={showNotification}>
      {children}
      {isNotificationVisible && (
        <Notification
          className="Notification"
          icon={<IconCheck size={18} />}
          color="teal"
          title="Login Successful"
          onClose={closeNotification}
        />
      )}
    </NotificationContext.Provider>
  )
}

NotificationProvider.propTypes = {
  /** Child element to be rendered which will have access to the context provided by the provider */
  children: PropTypes.element,
}
